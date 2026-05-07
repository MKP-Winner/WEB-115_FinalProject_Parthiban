const API_KEY = "Qvn8YOUTh16P80TirBag5NHp6k3XwtKyDm4VN4Mm";

class ContentManager {
    async getMotivationalQuote() {
        try {
            const res = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
                headers: {"X-Api-Key": API_KEY}
            });

            if (!res.ok) throw new Error(`API.error: ${res.status}`);
            
            const data = await res.json();
            return data[0].quote;
        } catch (err) {
            console.error("Motivational quote error:", err);
            return "Motivation failed! Work harder or give up!";
        }
    }

    async getKanyeQuote() {
        try {
            const res = await fetch("https://api.kanye.rest", {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });

            if (!res.ok) throw new Error(`API error: ${res.status}`);

            const data = await res.json();
            return data.quote;
        } catch (err) {
            console.error("Kanye quote error:", err);
            return "Kanye has no advice for you right now";
        }
    }

    async getQuote(mode) {
        if (mode === "motivation") {
            return await this.getMotivationalQuote();
        } else if (mode === "sarcasm") {
            return await this.getKanyeQuote();
        } else {
            return Math.random() < 0.5
            ? await this.getMotivationalQuote()
            : await this.getKanyeQuote();
        }
    }
}

let tasks = [];
let mode = "random";
const contentManager = new ContentManager();

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
    }
}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    
    if (text === "") return;

    tasks.push({ text, completed: false });
    input.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));

        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) span.style.textDecoration = "line-through";

        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);
    });

    updateProgress();
}

function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    document.getElementById("progressText").textContent = `Progress: ${percent}%`;
}

function setMode(newMode) {
    mode = newMode;
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});
document.getElementById("motivationBtn").addEventListener("click", () => {setMode("motivation");});
document.getElementById("sarcasmBtn").addEventListener("click", () => {setMode("sarcasm");});
document.getElementById("randomBtn").addEventListener("click", () => {setMode("random");});

loadTasks();
renderTasks();