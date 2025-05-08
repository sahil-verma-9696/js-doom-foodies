export function Categories(categories) {
  if (!categories) return "";
  return `
        <section class="categories-section">
          <h2>Explore our best categories</h2>
          <div class="categories">
            ${categories?.map(
              (card) => `<div class="category-card">
              <div id="${card.idCategory}" class="img-wrapper">
                <img
                  loading="lazy"
                  src="${card.strCategoryThumb}"
                  alt="category-img"
                />
                <h3>${card.strCategory}</h3>
              </div>
              <p>
                ${card.strCategoryDescription.split(" ").slice(0, 20).join(" ") + " ..."}
              </p>
              <a href="#">Explore more Beef 👉</a>
            </div>`
            )}
          </div>
        </section>
    `;
}
