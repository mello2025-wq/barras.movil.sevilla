import { GoogleGenAI, Type, Schema } from "@google/genai";
import { CocktailRecipe } from "../types";

// Safety check for process.env
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getApiKey();
// Initialize AI only if we have a key or handled the environment safely. 
// However, the SDK requires an object.
const ai = new GoogleGenAI({ apiKey });

const recipeSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "Name of the cocktail" },
    description: { type: Type.STRING, description: "A tempting 1-sentence description" },
    ingredients: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "List of ingredients with quantities"
    },
    instructions: { type: Type.STRING, description: "Short step-by-step instructions" },
    funFact: { type: Type.STRING, description: "A fun fact about this type of drink or ingredient" }
  },
  required: ["name", "description", "ingredients", "instructions"]
};

export const generateCocktailIdea = async (mood: string): Promise<CocktailRecipe | null> => {
  if (!apiKey) {
    console.warn("No API Key provided for Gemini");
    return {
      name: "Blue Lagoon (Demo)",
      description: "API Key missing - showing demo data. A refreshing blue tropical drink.",
      ingredients: ["1 oz Vodka", "1 oz Blue Curacao", "Lemonade", "Ice", "Cherry for garnish"],
      instructions: "Mix vodka and blue curacao over ice. Top with lemonade. Garnish with a cherry.",
      funFact: "This is a fallback recipe because the AI isn't connected yet!"
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Suggest a creative cocktail recipe based on this mood or theme: "${mood}". The recipe should be suitable for a professional mobile bar menu.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: recipeSchema,
        temperature: 0.7
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as CocktailRecipe;
    }
    return null;
  } catch (error) {
    console.error("Error generating cocktail:", error);
    return null;
  }
};