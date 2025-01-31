document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting immediately
    
    // Clear any previous messages
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("successMessage").textContent = "";

    // Get form values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!fname || !lname || !email || !message) {
        document.getElementById("errorMessage").textContent = "All fields are required!";
    } else if (email !== "example@gmail.com") {
        document.getElementById("errorMessage").textContent = "Please use the email: example@gmail.com";
    } else {
        // If validation passes, show success message
        document.getElementById("successMessage").textContent = "Form submitted successfully!";

        // Clear form fields after submission
        document.getElementById("contactForm").reset();

        // Optionally, you can also clear the success message after a few seconds:
        setTimeout(function() {
            document.getElementById("successMessage").textContent = "";
        }, 3000);  // Clear success message after 3 seconds
    }
});
