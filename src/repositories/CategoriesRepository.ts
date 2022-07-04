import { Category } from "../model/Category"

interface CreateCategoryDTO {
  name: string;
  description: string
}

export class CategoriesRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ name, description }: CreateCategoryDTO): void {
    const category = new Category()
    
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
  
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string) {
    return this.categories.some(category => category.name === name)
  }
}