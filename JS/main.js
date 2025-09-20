// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form validation + message
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const email = form.email.value;
    const message = document.getElementById('formMessage');

    if(!/\S+@\S+\.\S+/.test(email)){
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
      return;
    }
    message.textContent = "Thank you! Your message has been sent.";
    message.style.color = "green";
    form.reset();
  });
}
