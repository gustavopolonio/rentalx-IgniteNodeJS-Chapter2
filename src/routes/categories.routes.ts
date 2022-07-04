import { Router } from "express"
import { CategoriesRepository } from '../repositories/CategoriesRepository'

export const categoriesRoutes = Router()
const categoryRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  categoryRepository.create({ name, description })

  return res.status(201).send()
})