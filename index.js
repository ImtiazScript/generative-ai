const { GoogleGenerativeAI } = require("@google/generative-ai");
// Replace with your own API key
const API_KEY = 'XXXXXXXXXXXXXXXXXXXX';

// Generate AI content based on the given prompt
async function fetchGeneratedContent(prompt) {
    const aiClient = new GoogleGenerativeAI(API_KEY);
    const generativeModel = aiClient.getGenerativeModel({
        model: "gemini-1.5-flash"
    });

    // Get the result from the AI model
    const response = await generativeModel.generateContent(prompt);
    
    return response?.response?.text();
}


// Define a prompt to pass to the AI model
const prompt = process.argv[2] || "Provide a prompt";

// Fetch the generated content and log it to the console
fetchGeneratedContent(prompt)
    .then(generatedContent => console.log(generatedContent))
    .catch(console.error);