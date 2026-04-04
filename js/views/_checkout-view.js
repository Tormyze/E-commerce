export function renderCheckout(prodsArray, totalValue) {
    const checkoutList = document.querySelector('.checkout-list')
    checkoutList.innerHTML = ''

    if (prodsArray.length === 0) {
        checkoutList.innerHTML = `
        <li>
            <p>Seu carrinho está vazio.</p>
        </li>`;
        return
    }

    prodsArray.forEach(product => {
        const formattedPrice = `R$${(product.price * product.quantity).toFixed(2).replace('.', ',')}`

        const prodCardList = `<li>
            <figure>
                <img src="${product.image}" alt="${product.alt}">
            </figure>
            <div class="info-block">
                <h3>${product.title}</h3>
                <p class="quantity">Quantidade: ${product.quantity}</p>
                <h4 class="price">${formattedPrice}</h4>
                <button class="btn-remove" data-id="${product.id}">
                    <img src="assets/icons/trash.svg" alt="Remove product icon">
                </button>
            </div>
        </li>`
        checkoutList.insertAdjacentHTML('beforeend', prodCardList)
    });

    const formattedPrice = `R$${totalValue.toFixed(2).replace('.', ',')}`

    const totalHTML = `
        <div class='total'>
            <p id="title">TOTAL</p>
            <p id="total-price" class="price">${formattedPrice}</p>
        </div>
    `

    checkoutList.insertAdjacentHTML('beforeend', totalHTML)
}