cafe-site/
├── index.html
├── menu.html
├── about.html
├── contact.html
├── cart.html
├── style.css
├── script.js
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.textContent = ${item.name} - ${item.price}₽;
        let removeButton = document.createElement('button');
        removeButton.textContent = "Удалить";
        removeButton.onclick = () => removeFromCart(index);
        cartItem.appendChild(removeButton);
        cartItemsContainer.appendChild(cartItem);

        total += item.price;
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = Итого: ${total}₽;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const item = {
            name: this.previousElementSibling.textContent.split(' - ')[0],
            price: parseInt(this.previousElementSibling.textContent.split(' - ')[1])
        };
        addToCart(item);
    });
});