import { createIcons, X, ArrowUp } from "lucide";

export function initFab() {
  createIcons({
    icons: {
      X,
      ArrowUp,
    },
  });

  const topBtn = document.getElementById("top-button");
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
