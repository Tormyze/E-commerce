import { getCartCount } from "../services/_cart-service.js";

export function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-counter')
    if (cartDisplay) {
        let counter = cartDisplay.querySelector('p');
        if (!counter) {
            counter = document.createElement('p');
            cartDisplay.appendChild(counter);
        }
        counter.textContent = getCartCount();
    }
}