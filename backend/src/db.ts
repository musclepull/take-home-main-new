import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"
import { builtRecipes } from "./data"
import { RecipeModel } from "./models"

const createRecipes = async (): Promise<void> => {
  try {
    await RecipeModel.insertMany(builtRecipes)
  } catch (err) {
    console.log("Creation Issue: ", err)
  }
}

export const createAndConnectToServer = async (): Promise<typeof mongoose> => {
  const mongod = new MongoMemoryServer()
  await mongod.start()
  const url = await mongod.getUri()
  const connection = await mongoose.connect(url)
  // add default recipes
  await createRecipes()
  return connection
}
