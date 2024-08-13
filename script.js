let cart = [];

function addToCart(course, price) {
    cart.push({ course, price });
    alert(`${course} added to cart.`);
}

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const totalElem = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
