import { Categories } from "./components/Categories.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Products } from "./components/Products.js";
import { supplier } from "./scripts/Supplier.js";

async function App() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    console.log(category);
    const meals = await supplier.filterByCategory(category);
  

  console.log(meals);

  document.getElementById("root").innerHTML = `
    <main>
    ${Header()}
    ${Products(meals?.meals.slice(0, 10),category)}
    ${Footer()}
    </main>
    `;
}

App();
