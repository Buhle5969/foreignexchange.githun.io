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

     const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
        totalElem.innerText = totalPrice.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });
    }

    checkoutBtn.addEventListener('click', () => {
        alert('Proceeding to payment...');

        // Here you would integrate with a payment gateway like PayPal or Stripe.
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

  for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

     slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


