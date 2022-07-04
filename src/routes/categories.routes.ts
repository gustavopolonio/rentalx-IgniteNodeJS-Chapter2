import { Router } from "express"
import { CategoriesRepository } from '../repositories/CategoriesRepository'

export const categoriesRoutes = Router()
const categoryRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  const categoryAlreadyExists = categoryRepository.findByName(name)

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: "Category already exists." })
  }

  categoryRepository.create({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get("/", (_, res) => {
  const categoriesList = categoryRepository.list()

  return res.json(categoriesList)
})