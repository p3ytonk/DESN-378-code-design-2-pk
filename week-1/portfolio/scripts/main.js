const toggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  document.body.classList.toggle("dark", theme === "dark");
  document.body.classList.toggle("light", theme === "light");
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(systemPrefersDark ? "dark" : "light");
}

toggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme || "light";

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
