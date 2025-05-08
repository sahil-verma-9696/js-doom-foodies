import { supplier } from "../scripts/Supplier.js";
export function Products(products, category) {
  console.log(products, category);

  if (!products) return "";

  // Attach the click handler using event delegation
  document.addEventListener("click", async (e) => {
    if (e.target.matches(".addToCart")) {
      const mealId = e.target.dataset.mealId;
      console.log("Clicked meal ID:", mealId);
    }
  });

  return `
    <section class="products-section">
      <h2>Our best ${category} category !</h2>
      <div class="products">
        ${products
          .map(
            (card) => `
            <div id="meal-${card.idMeal}" class="product-card">
              <div  class="img-wrapper">
                <img
                  loading="lazy"
                  src="${card.strMealThumb}"
                  alt="product-img"
                />
                <h3>${card.strMeal.split(" ").slice(0, 2).join(" ")}...</h3>
              </div>
              <button class="addToCart" data-meal-id="${card.idMeal}">
                Add to cart 🛒
              </button>
            </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}
