let cart = [];

function addToCart(course, price) {
    cart.push({ course, price });
    alert(`${course} added to cart.`);
}
