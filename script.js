// =============================
// Welcome Button
// =============================

// Select the button
const welcomeBtn = document.getElementById("welcomeBtn");

// When the button is clicked
welcomeBtn.addEventListener("click", function () {

    alert("Welcome! Happy Learning 😊");

});


// =============================
// Contact Form
// =============================

// Select the form
const form = document.getElementById("contactForm");

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Show success message
    alert("Thank you! Your message has been submitted.");

    // Clear all form fields
    form.reset();

});
