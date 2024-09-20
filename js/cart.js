// Load cart from localStorage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to update total price
function updateCartTotal() {
    const cartTotal = document.getElementById('cart-total');
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Function to render cart items
function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <p>${item.name}</p>
                    <p class="cart-item-price">$${item.price}</p>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Add event listener to remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', removeItemFromCart);
    });
}

// Function to remove item from cart
function removeItemFromCart(event) {
    const index = event.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
    renderCartItems();
}

// Initialize cart when the page loads
window.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateCartTotal();
    renderCartItems();
});
