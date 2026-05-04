const API_KEY = "Qvn8YOUTh16P80TirBag5NHp6k3XwtKyDm4VN4Mm";

class ContentManager {
    async getMotivationalQuote() {
        try {
            const res = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
                headers: {"X-Api-Key": Qvn8YOUTh16P80TirBag5NHp6k3XwtKyDm4VN4Mm}
            });
            const data = await res.json();
            return data[0].quote;
        } catch {
            return "Motivation failed! Work harder or give up!";
        }
    }

    async getKanyeQuote() {
        try {
            const res =await fetch("https://api.kanye.rest/");
            const data = await res.json();
            return data.quote;
        } catch {
            return "Kanye has no advice for you right now";
        }
    }

    async getQuote(mode) {
        if (mode === "motivation") {
            return await this.getNinjasQuote();
        } else if (mode === "sarcasm") {
            return await this.getKanyeQuote();
        } else {
            return Math.random() < 0.5
            ? await this.getNinjaQuote()
            : await this.getKanyeQuote();
        }
    }
}