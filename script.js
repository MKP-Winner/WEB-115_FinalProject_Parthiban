const API_KEY = "Qvn8YOUTh16P80TirBag5NHp6k3XwtKyDm4VN4Mm";

class ContentManager {

    // Fetches a motivational quote from API Ninjas
    async getMotivationalQuote() {
        try {
            const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
                headers: { "X-Api-Key": API_KEY }
            });

            if (!res.ok) throw new Error(`API error: ${res.status}`);

            const data = await res.json();
            return data[0].quote;
        } catch (err) {
            console.error("Motivational quote error:", err);
            return "Motivation failed to load. Work harder or give up!";
        }
    }

    // Fetches a sarcastic Kanye quote from kanye.rest
    async getKanyeQuote() {
        try {
            const res = await fetch("quotes.json");
            if (!res.ok) throw new Error(`Failed to load quotes.json`);

            const data = await res.json();
            const quotes = data;
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        } catch (err) {
            console.error("Kanye quote error:", err);
            return "Kanye has no advice for you right now.";
        }
    }

    // Returns a quote based on the selected mode
    async getQuote(mode) {
        if (mode === "motivation") {
            return await this.getMotivationalQuote();
        } else if (mode === "sarcasm") {
            return await this.getKanyeQuote();
        } else {
            // Random mode: 50/50 chance between the two APIs
            return Math.random() < 0.5
                ? await this.getMotivationalQuote()
                : await this.getKanyeQuote();
        }
    }
}

// --- App State ---
let tasks = [];
let mode = "random";
const contentManager = new ContentManager();

// --- Local Storage ---
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
    }
}

// --- Task Management ---
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

// --- DOM Rendering ---
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

// --- Quote System ---
async function updateQuote() {
    const display = document.getElementById("quoteDisplay");
    display.textContent = "Loading quote...";

    const quote = await contentManager.getQuote(mode);
    display.textContent = quote;
}

function setMode(newMode) {
    mode = newMode;
    updateQuote();
}

// --- Event Listeners ---
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Allow pressing Enter to add a task
document.getElementById("taskInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

document.getElementById("motivationBtn").addEventListener("click", () => setMode("motivation"));
document.getElementById("sarcasmBtn").addEventListener("click", () => setMode("sarcasm"));
document.getElementById("randomBtn").addEventListener("click", () => setMode("random"));

// --- Init ---
loadTasks();
renderTasks();
