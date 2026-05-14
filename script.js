const contactForm =
document.querySelector(".contact-form");


contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert(
    "Message Sent Successfully"
  );

  contactForm.reset();

});