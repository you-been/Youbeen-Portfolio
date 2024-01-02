AOS.init();

const logo = document.querySelector(".logo");
const globalMenuA = document.querySelectorAll(".global-menu>li>a");
const position = document.querySelectorAll(".position");
const button = document.querySelector(".button");
//const footer = document.querySelector('.contact-ft')

//const footerOffsetTop = footer.offsetTop;
//let clientHt = document.documentElement.clientHeight

//console.log(footerOffsetTop);

logo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

globalMenuA.forEach((item, idx) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();

    const getPosition = position[idx].offsetTop;
    scrollTo({
      top: getPosition,
      behavior: "smooth",
    });
  });
});

// gsap scroll trigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".path1", {
  scrollTrigger: {
    trigger: ".header-item-wrapper",
    start: "0%", //시작 지점
    end: "100%", //끝 지점
    scrub: 1,
  },
  y: 50,
  scale: 0.3,
  rotate: -20,
});
gsap.from(".path2", {
  scrollTrigger: {
    trigger: ".standard",
    start: "20% bottom", //시작 지점
    end: "100% bottom", //끝 지점
    scrub: 1,
  },
  y: 50,
  scale: 0.3,
  rotate: -20,
});
gsap.from(".path3", {
  scrollTrigger: {
    trigger: ".standard2",
    start: "20% bottom", //시작 지점
    end: "100% bottom", //끝 지점
    scrub: 1,
  },
  y: 50,
  scale: 0.3,
  rotate: -20,
});
const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    trigger: ".header-item-wrapper",
    start: "50% 50%",
    endTrigger: ".bottom-img-wrapper",
    end: "bottom 50%",
    marker: true,
  },
});

tl.to(".button", {
  rotateZ: 500,
});
gsap.to(".button", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "0% bottom", //시작 지점
    end: "0% bottom", //끝 지점
    scrub: 1,
    toggleClass: "on",
  },
  x: -300,
  scale: 2,
});
