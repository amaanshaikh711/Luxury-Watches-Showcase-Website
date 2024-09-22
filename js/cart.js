// Load cart from localStorage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    console.log(cartCount)
    cartCount.textContent = cart.length;
}

// Function to update total price
function updateCartTotal() {
    console.log("Update cart total");
    
    const cartTotal = document.getElementById('cart-total');
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = "$ "+ total.toFixed(2);
}

// Function to render cart items
function renderCartItems() {
    console.log("Render cart items");
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    console.log(cart);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('product-list');
            cartItem.innerHTML = `
                <div class="product-name"> 
                    <img src="${item.image}" alt="${item.name}">
                    <div class="product-name">${item.name}</div>
                </div>
                <div class="product-price">$
                    ${item.price}
                    <span class="remove-btn" data-index="${index}">Remove</span>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Add event listener to remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', removeItemFromCart);
    });

    document.querySelectorAll('.btn-submit').forEach(btn => {
        btn.addEventListener('click', submitForm);
    });
}

// Function to remove item from cart
function removeItemFromCart(event) {
    const index = event.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    // updateCartCount();
    updateCartTotal();
    renderCartItems();
}



function submitForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const phoneValid = /^\d*$/.test(phone);

    if(cart.length > 0){
        if (name && email && phone && address) {

            // if (!emailValid) {
            //     alert('Please enter a valid email address.');
            // } else if (!phoneValid) {
            //     alert('Please enter a valid phone number.');
            // } else {    
                alert(`Thank you, ${name}! We have received your order. Your order details are as follows:
                Name: ${name}
                Email: ${email}
                Phone: ${phone}`);

                // Clear form fields
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';

                localStorage.setItem('cart', JSON.stringify([]));
                updateCartTotal();
                renderCartItems();
                location.reload();
            // }
        } else {
            alert('Please fill out all the required fields.');
        }
    } else {
        alert('You need to add items to the cart before submitting your order.');
    }
}

// Initialize cart when the page loads
window.addEventListener('DOMContentLoaded', () => {
    // updateCartCount();
    updateCartTotal();
    renderCartItems();
});





