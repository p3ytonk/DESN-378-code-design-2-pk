const toggle = document.querySelector(".theme-toggle");

document.documentElement.setAttribute("data-theme", "light");

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
});
