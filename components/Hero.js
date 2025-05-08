export function Hero(featured1, featured2, featured3) {
  return `
     <section class="hero-section">
          <div class="search">
            <input type="text" placeholder="Search for food" />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <h2>
            Order food. Explore choices.
            <em>Doom it now.</em>
          </h2>

          <div class="featured">
            <img
              loading="lazy"
              src="${featured1.strCategoryThumb}"
              alt="feature"
            />
            <img
              loading="lazy"
              src="${featured2.strCategoryThumb}"
              alt="feature"
            />
            <img
              loading="lazy"
              src="${featured3.strCategoryThumb}"
              alt="feature"
            />
          </div>
        </section>
    `;
}
