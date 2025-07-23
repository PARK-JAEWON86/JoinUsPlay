document.addEventListener("DOMContentLoaded", () => {
  // 페이지 내 앵커 링크 부드럽게 스크롤
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      // 모바일 메뉴 닫기 (Bootstrap collapse)
      const navCollapse = document.querySelector("#navbarNav");
      if (navCollapse.classList.contains("show")) {
        // Bootstrap 5 collapse 토글
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });
});
