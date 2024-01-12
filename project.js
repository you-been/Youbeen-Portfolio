/* const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
}); */

document.addEventListener("scroll", () => {
  const menu = document.querySelector(".global-menu");
  const menuHeight = menu.getBoundingClientRect().height;
  if (window.scrollY > menuHeight) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const menuActive = document.querySelector(".global-menu");
  const triggerDiv = document.querySelector(".review-section");

  // 스크롤 이벤트에 대한 핸들러
  document.addEventListener("scroll", function () {
    // 트리거 div의 위치 계산
    const triggerDivTop = triggerDiv.getBoundingClientRect().top;

    // 스크롤 위치가 트리거 div의 상단에 도달하면 배경색을 변경
    if (triggerDivTop <= window.innerHeight) {
      body.style.backgroundColor = "#eff0c1";
      menuActive.style.backgroundColor = "#eff0c1b3";
    } else {
      body.style.backgroundColor = ""; // 기본 배경색으로 되돌림
      menuActive.style.backgroundColor = "";
    }
  });
});
