export function renderProducts(products) {
  const container = document.querySelector('#products-container');
  container.innerHTML = '';

  products.forEach(product => {
    // Preço para o padrão brasileiro
    const formattedPrice = `R$${product.price.toFixed(2).replace('.', ',')}`;

    const cardHTML = `
      <div class="prod-card">
        <figure>
          <img src="${product.image}" alt="${product.alt}">
        </figure>
        <div class="info">
          <p class="title">${product.title}</p>
          <p class="price">${formattedPrice}</p>
          <button class="btn-comprar" data-id="${product.id}">Adicionar no carrinho</button>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}