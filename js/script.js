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
        menuToggle();
    }) 
    .catch(error => console.error('Error loading HTML:', error)); 


/***** SHOW MOBILE MENU  ******/  
function menuToggle(params) {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    console.log(navLinks);
    console.log(navLinks.classList)

    menuToggle.addEventListener('click', () => {
        console.log(navLinks.classList);
        
        navLinks.classList.toggle('active');
    });
}



    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    
    document.querySelectorAll('.slider-item').forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });



  
