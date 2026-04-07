import { getProducts } from './_data.js'

const CART_KEY = 'jukstore_cart'

export function getCart() {
    const cartData = localStorage.getItem(CART_KEY)
    return cartData ? JSON.parse(cartData) : []
}

export async function getProcessedProducts() {
  const cartIds = getCart(); // array de IDs
  const cartObjs = await getProducts(); // array de objs

  const objsInCart = cartObjs.filter((prod) => cartIds.includes(prod.id));

  return objsInCart.map((prod) => {
    const quantity = cartIds.filter((id) => id === prod.id).length;
    return { ...prod, quantity };
  });
}

export function addToCart(productId) {
    const cart = getCart()
    cart.push(Number(productId))

    localStorage.setItem(CART_KEY, JSON.stringify(cart))

    console.log(`Carrinho atualizado: `, cart);
}

export function removeOneFromCart(productId) {
    const cart = getCart();
    const idToRemove = Number(productId);
    
    // encontra a 1ª ocorrência do ID, mesmo que haja mais
    const index = cart.indexOf(idToRemove);

    // se encontrar
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));

        console.log(`Removido 1 unidade - ID do produto: ${idToRemove}`);
    }
}

export const getCartCount = () => getCart().length