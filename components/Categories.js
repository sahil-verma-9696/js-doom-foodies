import { supplier } from "../scripts/Supplier.js";
export function Categories(categories) {
  if (!categories) return "";

  // Attach the click handler using event delegation
  document.addEventListener("click", async (e) => {
    if (e.target.matches(".explore-link")) {
      const category = e.target.dataset.category;
      console.log("Clicked category ID:", category);
      console.log(await supplier.filterByCategory(category));
    }
  });

  return `
    <section class="categories-section">
      <h2>Explore our best categories</h2>
      <div class="categories">
        ${categories
          .map(
            (card) => `
            <div class="category-card">
              <div id="${card.idCategory}" class="img-wrapper">
                <img
                  loading="lazy"
                  src="${card.strCategoryThumb}"
                  alt="category-img"
                />
                <h3>${card.strCategory}</h3>
              </div>
              <p>
                ${card.strCategoryDescription
                  .split(" ")
                  .slice(0, 20)
                  .join(" ")}...
              </p>
              <a href="/meals.html?category=${card.strCategory}" class="explore-link" data-category="${card.strCategory}">
                Explore more ${card.strCategory} 👉
              </a>
            </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}
