import { getProducts } from './services/_data.js';
import { renderProducts } from './views/_product-view.js';
import { addToCart } from './services/_cart-service.js';
import { updateCartDisplay } from './views/_cart-view.js';

async function initStore() {
  try {
    const products = await getProducts();
    renderProducts(products);
    updateCartDisplay();
  } catch (error) {
    console.error("Erro ao carregar os produtos:", error);
  }
} document.addEventListener('DOMContentLoaded', initStore);

const productsContainer = document.querySelector('.products-container')
productsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-comprar')) {
    const prodId = e.target.dataset.id
    addToCart(prodId)
    updateCartDisplay()

    console.log('Produto adicionado ao carrinho - ID:', prodId)
  }
})