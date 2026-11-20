
import { prompt } from "./util.js";

export async function tretment(projet) {

    let lienAPI = "https://api.deepseek.com/chat/completions";

    let key = sessionStorage.getItem("API");

    if (!key) {
        throw new Error("API Key introuvable !");
    }

    let message = prompt(projet);

    try {
        let response = await fetch(lienAPI, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            },

            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "user",
                        content: message
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error("Erreur API : " + response.status);
        }

        let data = await response.json();
        console.log(data.choices[0].message.content)
        return data.choices[0].message.content;

    } catch (error) {
        console.error("Erreur :", error);
        throw error;
    }
}
