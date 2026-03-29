import { getProducts } from './services/_data.js';
import { renderProducts } from './views/_product-view.js';

async function initStore() {
  try {
    const products = await getProducts();
    renderProducts(products);
  } catch (error) {
    console.error("Erro ao carregar os produtos:", error);
  }
}

document.addEventListener('DOMContentLoaded', initStore);