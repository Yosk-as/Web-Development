document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Prevent the page from actually reloading
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            // Simple Validation Check
            if (name === "" || email === "") {
                alert("Please fill out all required fields.");
                return;
            }

            // Success Message (Requirement for Self-Audit)
            alert("Thank you, " + name + "! Your message has been sent to Yoskar and the team.");
            
            // Clear the form
            contactForm.reset();
        });
    }
});
