/*This site was developed for Salisbury's WXSU Student run radio club by Jeremy Scheuerman
If you have questions about the source code of the site, or want to checkout my other work
please visit my portfolio here to find my work and contact information
https://jeremy-scheuerman-portfolio.helix5712.com/
 */
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");
hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
