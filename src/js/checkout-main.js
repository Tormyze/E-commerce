import { getProcessedProducts, removeOneFromCart } from "./services/_cart-service.js";
import { renderCheckout } from "./views/_checkout-view.js";

// Atualiza o checkout
async function refreshCheckout() {
  const processed = await getProcessedProducts();
  const cartTotal = processed.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  renderCheckout(processed, cartTotal)
} document.addEventListener("DOMContentLoaded", refreshCheckout);


// Remove do checkout
const checkoutList = document.querySelector('.checkout-list')
checkoutList.addEventListener('click', async (e) => {
  const btnRemove = e.target.closest('.btn-remove')

  if (btnRemove) {
    const id = btnRemove.dataset.id
    removeOneFromCart(id)

    await refreshCheckout()
  }
})