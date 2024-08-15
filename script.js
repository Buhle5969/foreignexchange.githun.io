let cart = [];

// Add items to the cart and redirect to cart details page
function addToCart(courseName, price, description) {
    // Add the selected course to the cart array
    cart.push({ courseName, price, description, quantity: 1 });

    // Save the cart to local storage so it persists across pages
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to cart details page
    window.location.href = 'cartdetails.html';
}

// Display cart items on the cartdetails.html page
function displayCartItems() {
    const cartItemsSection = document.getElementById('cart-items');
    const savedCart = JSON.parse(localStorage.getItem('cart'));

    if (savedCart && savedCart.length > 0) {
        savedCart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <h3>${item.courseName}</h3>
                <p>Description: ${item.description}</p>
                <p>Price: ZAR ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            `;
            cartItemsSection.appendChild(cartItemDiv);
        });
    } else {
        cartItemsSection.innerHTML = '<p>Your cart is empty.</p>';
    }
}

// Run displayCartItems() when the cartdetails.html page loads
if (window.location.pathname.includes('cartdetails.html')) {
    displayCartItems();
}

// Slideshow functionality (optional for banner)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
