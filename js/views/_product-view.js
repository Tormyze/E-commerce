export function renderProducts(products) {
  const container = document.querySelector('.products-container');
  container.innerHTML = '';

  products.forEach(product => {
    // Preço para o padrão brasileiro
    const formattedPrice = `R$${product.price.toFixed(2).replace('.', ',')}`;

    const cardHTML = `
      <div class="prod-card">
        <img src="${product.image}" alt="${product.alt}" class="prod-card-img">
        <p>${formattedPrice}</p>
      </div>
    `;

    // Injeta o HTML no contêiner
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}