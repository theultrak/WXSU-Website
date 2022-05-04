/*This site was developed for Salisbury's WXSU Student run radio club by Jeremy Scheuerman
If you have questions about the source code of the site, or want to checkout my other work
please visit my portfolio here to find my work and contact information
https://jeremy-scheuerman-portfolio.helix5712.com/
 */ let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");
hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
