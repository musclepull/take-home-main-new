import { RecipeModel } from "../models"
import { Request, Response } from "express"

interface Query {
  _id?: string
}

const recipeCleaner = (recipe): { _id: string; name: string, instructions: string, ingredients: string } => {
  const { _id, name, instructions, ingredients } = recipe
  return { _id, name, instructions, ingredients }
}

export const recipeMiddleware = async (
  req: Request,
  res: Response,
): Promise<void> => {
  // TODO fetch and return a recipe
  const { id } = req.params
  const query: Query = {}
  if (id) {
    query._id = id
  }
  console.log("Query: " + query._id);
  console.log("Recipe Model: " + RecipeModel);
  const foundRecipe = await RecipeModel.find(query)
  console.log("Found Recipe: " + foundRecipe);
  const builtRecipes = foundRecipe.map(recipeCleaner)
  res.send(builtRecipes)
}