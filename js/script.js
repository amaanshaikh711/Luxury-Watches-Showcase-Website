
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

  
  $(document).ready(function(){
      $('.btn').hover(function(){
          $(this).css('background-color', 'grey');
      }, function(){
          $(this).css('background-color', 'white');
      });
  });


$(document).ready(function() {
    $('.buy-now-btn').on('click', function() {
        var productName = $(this).closest('.product-img-container').find('.overlay p').text();
        alert('Successfully added ' + productName + ' to the cart!');
    });
});

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
  
  
