# Google Generative AI Node.js Integration

This project demonstrates how to integrate Google Generative AI (Gemini) into a Node.js application using the `@google/generative-ai` npm package.

## Installation

To use this project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/imtiazUAP/generative-ai.git
cd generative-ai
npm install
```

## API Key Setup

To use Google Generative AI, you must first generate your own API key from [Google AI Studio](https://aistudio.google.com/app/apikey). Once you have your API key, replace the placeholder `API_KEY` in the code with your actual API key.

```javascript
const API_KEY = 'YOUR_API_KEY';  // Replace 'YOUR_API_KEY' with the API key you generated from Google AI Studio
```

## Usage

You can run the script and pass in a prompt from the terminal to generate content using Google Generative AI.

### Example

```bash
node index.js "Tell me a story about a magic backpack."
```

The script will fetch the AI-generated content and log it to the console.

### Code Snippet

```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");
// Replace with your own API key
const API_KEY = 'YOUR_API_KEY'; 

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

// Get the prompt from the command-line arguments
const prompt = process.argv[2] || "Provide a prompt";  // Default prompt if none provided

// Fetch the generated content and log it to the console
fetchGeneratedContent(prompt)
    .then(generatedContent => console.log(generatedContent))
    .catch(console.error);
```

## Dependencies

- Node.js
- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai)

## License

This project is licensed under the MIT License.
