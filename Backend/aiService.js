const axios = require("axios");
require("dotenv").config(); // ✅ Make sure this is at the top

const generateEmail = async (prompt) => {
    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.1-8b-instant",  // ✅ Valid model
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant that writes professional emails based on user prompts.",
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Groq API Error:", error.response?.data || error.message);
        throw new Error("Failed to generate email");
    }
};

module.exports = { generateEmail };
