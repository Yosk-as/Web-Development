document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. NEWSLETTER POPUP LOGIC ---
    const modal = document.getElementById("newsletterModal");
    const exitBtn = document.getElementById("exitModal");

    // Close the Newsletter when "No thanks" is clicked
    if (exitBtn) {
        exitBtn.onclick = function(event) {
            event.preventDefault();
            modal.style.display = "none";
        }
    }

    // --- 2. CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (name === "" || email === "") {
                alert("Please fill out all required fields.");
                return;
            }

            // Requirement: Success message when forms are submitted
            alert("Thank you, " + name + "! Your message has been sent to Yoskar and the team.");
            contactForm.reset();
        });
    }
});
