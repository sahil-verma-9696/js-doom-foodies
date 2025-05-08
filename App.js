import { Categories } from "./components/Categories.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Supplier } from "./scripts/Supplier.js";

async function App() {
  const supplier = new Supplier("https://www.themealdb.com");

  const categories = await supplier.loadCategories();

  console.log(categories);

  document.getElementById("root").innerHTML = `
    <main>
    ${Header()}
    ${Hero(
      categories?.categories[3],
      categories?.categories[6],
      categories?.categories[8]
    )}
    ${Categories(categories?.categories)}
    ${Footer()}
    </main>
    `;
}

App();
