let cart = [];

function addToCart(course, price) {
    cart.push({ course, price });
    alert(`${course} added to cart.`);
}

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const totalElem = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');

     if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        checkoutBtn.disabled = true;
    } else {
        cart.forEach(item => {
            const itemElem = document.createElement('div');
            itemElem.className = 'cart-item';
            itemElem.innerHTML = `<p>${item.course} - ZAR ${item.price.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' })}</p>`;
            cartItems.appendChild(itemElem);
        });

