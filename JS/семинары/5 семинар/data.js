async function fetchData() {
  try {
    const response = await fetch("data.json");
    console.log(response);
    if (!response.ok) {
      throw new Error("Не удалось получить данные с data JSON");
    }
    const data = await response.json();
    console.log(data);
    const productBox = document.querySelector(".product__box");

    data.forEach(({ name, image, price, color, size, quantity }) => {
      const product = `
            <div class="product">
            <div class="product__img-wrapper">
              <img
                class="product__img"
                src="${image}"
                alt="${name}"
              />
            </div>
            <div class="product__information-section">
              <div class="product__information">
                <div class="product__information-heading">${name}</div>
                <div class="product__information-text">
                  <p class="product__information-text-price-lable">
                    Price: <span class="product__information-text-price">$${price}</span>
                  </p>
                  <p class="product__information-text-color">Color: ${color}</p>
                  <p class="product__information-text-size">Size: ${size}</p>
                  <p class="product__information-text-quantity">
                    <label class="product__information-text-quantity-lable">Quantity:</label>
                    <input type="text" class="product__information-text-quantity-number" value="${quantity}" />
                    </p>
                </div>
              </div>
            </div>
            <button class="product__delete-svg"></button>
            </div>`;
      productBox.insertAdjacentHTML("beforeend", product);
    });
    const btns = document.querySelectorAll(".product__delete-svg");
    btns.forEach((el) => {
      el.addEventListener("click", () => {
        const product = el.closest(".product");
        product.remove();
      });
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
