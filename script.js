document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  let navigation = document.querySelector(".navigation");
  let navBar = document.querySelector("nav");
  let navBtn = document.querySelector(".navigation-menu-btn");

  if (window.innerWidth > 768) {
    gsap.to(".navigation", {
      width: "40%",
      justifyContent: "center",
      padding: 0,
      top: "0",
      left: "0",

      scrollTrigger: {
        trigger: "#home",
        scrub: true,
        start: "90% top",
        end: "bottom top",
      },
    });
    gsap.to("nav", {
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,

      scrollTrigger: {
        trigger: "#home",
        scrub: true,
        start: "90% top",
        end: "bottom top",
      },
    });
  }

  if (window.innerWidth < 768) {
    let isOpen = false;
    navBtn.addEventListener("click", (e) => {
      if (!isOpen) {
        navigation.style.transform = "translateX(0)";
        navBar.style.width = "70%";
        navBar.style.display = "flex";
        navigation.style.opacity = 1;
      } else {
        navigation.style.opacity = 0;
        navigation.style.transform = "translateX(-300%)";
        navBar.style.width = "auto";
        navBar.style.display = "inline-block";
      }
      isOpen = !isOpen;
    });
  }

  const handlePopUp = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    let popUp = document.querySelector(".popUp");
    if (entry.isIntersecting) popUp.style.transform = "translateX(0)";
    else {
      setTimeout(() => {
        popUp.style.transform = "translateX(200%)";
      }, 5000);
    }
  };

  const footerObserver = new IntersectionObserver(handlePopUp, {
    root: null,
    threshold: 0,
  });

  footerObserver.observe(document.querySelector("#footer"));
});
let loadingPopUp = document.querySelector(".loading-popup");
document.body.style.overflow = "hidden";
document.body.style.height = "100vh";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    loadingPopUp.style.display = "none";
  }, 500);
});
