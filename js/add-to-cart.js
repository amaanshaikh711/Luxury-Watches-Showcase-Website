function addToCart(image, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ image, name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart`);
}

const btn = document.querySelectorAll('.add-to-cart');
btn.forEach(function(ele){
    ele.addEventListener('click', function(){
        const productItem = ele.parentElement.parentElement;                        
        const image = productItem.querySelector('img').src;            
        const name = productItem.querySelector('p').textContent;
        const price = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));
        console.log(image, name, price);
        
        addToCart(image, name, price);
    });
});
