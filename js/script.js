//LOAD HTML FILES HEADER AND FOOTER
fetch('include/footer.html') 
    .then(response => response.text()) 
    .then(html => { 
        document.getElementById('footer').innerHTML = html; 
    }) 
    .catch(error => console.error('Error loading HTML:', error)); 

fetch('include/header.html') 
    .then(response => response.text()) 
    .then(html => { 
        document.getElementById('header').innerHTML = html; 
    }) 
    .catch(error => console.error('Error loading HTML:', error)); 



const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// $(document).ready(function(){
//     $('.buy-now-btn').hover(function(){
//         $(this).css('background-color', '#ff5733');
//     }, function(){
//         $(this).css('background-color', '#007bff');
//     });

//     $('.product-img').hover(function(){
//         $(this).css('transform', 'scale(1.1)');
//     }, function(){
//         $(this).css('transform', 'scale(1)');
//     });
// });
  
  
