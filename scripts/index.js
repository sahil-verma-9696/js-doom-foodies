import { Product } from "./Product.js";
import { Store } from "./Store.js";
import { Cart } from "./Cart.js";
import { Supplier } from "./Supplier.js";

class Manager {
  constructor(name) {
    this.name = name;
  }
}

async function main() {
  const supplier = new Supplier("https://www.themealdb.com");
  let myStore = new Store("mealdb");

  console.log(myStore);
  console.log(supplier);

  const filters = (await supplier.listFilters("c")).filters;

  const meals = await supplier.filterByCategory(filters[0].strCategory)
  console.log(meals);
  

}

main();
