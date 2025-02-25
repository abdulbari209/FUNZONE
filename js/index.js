// navbar toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

// Toggle show/hide for navbar
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
    });
});
//  park character
const popup = document.getElementById('character-popup');
const closePopup = document.getElementById('popup-close');

// time 
setTimeout(() => {
    popup.style.display = 'block';
}, 1000);

// close popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const videoHeight = document.querySelector(".header-video-container").offsetHeight;

    if (window.scrollY > videoHeight) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
// Handle Chat Button Click
document.getElementById("chatButton").addEventListener("click", function () {
    document.getElementById("chatBox").style.display = "block";
});

// Handle Close Button
document.getElementById("closeChat").addEventListener("click", function () {
    document.getElementById("chatBox").style.display = "none";
});
//  ask button popup

document.getElementById('sendMessage').addEventListener('click', function () {

    const userMessage = document.getElementById('userMessage').value;

    if (userMessage.trim() === "") {
        alert("Please type a message before sending!");
        return;
    }

    document.getElementById('modalMessageContent').innerText = `Your Message has been submitted Successfully`;


    const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
    messageModal.show();
});
// Show/Hide the button based on scroll position
window.addEventListener("scroll", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// events 
// Add animation for text fade-in
$('#eventsCarousel').on('slide.bs.carousel', function () {
    $('.carousel-caption').hide().fadeIn(1500);
});

// Autoplay settings for the carousel
$('.carousel').carousel({
    interval: 1000, 
    ride: 'carousel'
});