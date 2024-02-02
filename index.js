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
    pin: true,
    trigger: ".button-wrapper",
    start: "100% bottom",
    endTrigger: ".bottom-img-wrapper",
    end: "30% 100%",
  },
});

tl.to(".button-wrapper", {
  rotateZ: 900,
});
gsap.to(".button-wrapper", {
  scrollTrigger: {
    trigger: ".bottom-img-wrapper",
    start: "0% bottom", //시작 지점
    end: "0% bottom", //끝 지점
    scrub: 1,
    /* markers: "true", */
  },
  x: -300,
  scale: 2,
});

const menu = document.querySelector(".global-menu");

document.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});

// bgColor change
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const menuActive = document.querySelector(".global-menu");
  const triggerDiv = document.querySelector(".contact-ft");

  document.addEventListener("scroll", function () {
    // 트리거 div 위치 계산
    const triggerDivBottom = triggerDiv.getBoundingClientRect().top;

    // 스크롤 위치가 트리거의 상단에 도달시 배경색 변경
    if (triggerDivBottom <= window.innerHeight) {
      body.style.backgroundColor = "#eff0c1";
      menuActive.style.backgroundColor = "#eff0c1b3";
    } else {
      body.style.backgroundColor = ""; // 기본 배경색으로 되돌림
      menuActive.style.backgroundColor = "";
    }
  });
});
