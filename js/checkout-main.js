import { getProcessedProducts } from "./services/_cart-service.js";
import { renderCheckout } from "./views/_checkout-view.js";

async function refreshCheckout() {
  const processed = await getProcessedProducts();
  const cartTotal = processed.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  renderCheckout(processed, cartTotal)
}

document.addEventListener("DOMContentLoaded", refreshCheckout);
