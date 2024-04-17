const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHight = current.offsetHeight,
      sectionTop = current.offsetHeight - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* Animation */

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset :true
});

sr.reveal(`.home__data,.product__data,.step__content`);
sr.reveal(`.home__img`, { origin: "bottom" });
sr.reveal(`.product__card`, { interval: 100 });
sr.reveal(`.about__img, .test__img`, { origin: "right" });
sr.reveal(`.about__data , test__data`, { origin: "left" });
