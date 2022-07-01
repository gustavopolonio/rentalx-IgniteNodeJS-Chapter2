import { Router } from "express"

export const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body

  const category = {
    name,
    description
  }

  categories.push(category)

  return res.status(201).json(category)
})