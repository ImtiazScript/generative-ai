const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = 'XXXX';  // Replace with your actual API key

async function generateStory() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

generateStory().catch(console.error);
