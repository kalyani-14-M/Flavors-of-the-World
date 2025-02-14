document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector("#authForm");
    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            alert("Sign In Successful!");
            signInForm.reset(); 
        });
    }
    const signUpForm = document.querySelector("#sign-up form");
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            alert("Sign Up Successful!");
            signUpForm.reset();
        });
    }
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            console.log(`Navigating to: ${this.getAttribute("href")}`);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            alert("Message Sent Successfully!");
            let successMessage = document.createElement("p");
            successMessage.textContent = "Message Sent Successfully!";
            successMessage.style.color = "green";
            successMessage.style.marginTop = "10px";
            let existingMessage = document.querySelector(".contact-success");
            if (existingMessage) {
                existingMessage.remove();
            }

            successMessage.classList.add("contact-success");
            contactForm.appendChild(successMessage);

            contactForm.reset(); 
        });
    }
});
