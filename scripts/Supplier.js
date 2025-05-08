export class Supplier {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async loader(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) throw new Error("Failed to fetch");
      return await response.json();
    } catch (error) {
      console.error("Error fetching:", error);
      return null;
    }
  }

  // Load all categories
  async loadCategories() {
    return await this.loader("/api/json/v1/1/categories.php");
  }

  // Load a random meal
  async loadRandomMeal() {
    return await this.loader("/api/json/v1/1/random.php");
  }

  // Look up a meal by ID
  async lookupMealById(id) {
    return await this.loader(`/api/json/v1/1/lookup.php?i=${id}`);
  }

  // Search meals by first letter
  async searchByFirstLetter(letter) {
    return await this.loader(`/api/json/v1/1/search.php?f=${letter}`);
  }

  // Search meals by name
  async searchByName(name) {
    return await this.loader(
      `/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`
    );
  }

  // List all categories, areas, or ingredients
  async listFilters(type) {
    const validTypes = ["c", "a", "i"]; // category, area, ingredient
    if (!validTypes.includes(type)) throw new Error("Invalid list type");
    return {
      filters: (await this.loader(`/api/json/v1/1/list.php?${type}=list`)).meals,
    };
  }

  // Filter meals by main ingredient
  async filterByIngredient(ingredient) {
    return await this.loader(
      `/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
    );
  }

  // Filter meals by category
  async filterByCategory(category) {
    return await this.loader(
      `/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`
    );
  }

  // Filter meals by area
  async filterByArea(area) {
    return await this.loader(
      `/api/json/v1/1/filter.php?a=${encodeURIComponent(area)}`
    );
  }

  // Get meal thumbnail URL in a specific size
  getMealThumbnail(imageUrl, size = "small") {
    return imageUrl.replace(/\.jpg.*$/, `.jpg/${size}`);
  }

  // Get ingredient thumbnail URL in a specific size
  getIngredientThumbnail(ingredientName, size = "small") {
    const formatted = ingredientName.toLowerCase().replace(/ /g, "_");
    return `https://www.themealdb.com/images/ingredients/${formatted}-${size}.png`;
  }
}
