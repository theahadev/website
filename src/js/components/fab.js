export function initFab() {
  const topBtn = document.getElementById("fab-top-btn");
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const updateTopBtn = () => {
    topBtn.classList.toggle("hidden", window.scrollY <= 10);
  };

  window.addEventListener("scroll", updateTopBtn, { passive: true });
  updateTopBtn();
}
