const toggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  // Sets the attribute your CSS uses: [data-theme="dark"]
  document.documentElement.dataset.theme = theme;

  // Optional: body classes (useful for screenshots / older rubric language)
  document.body.classList.toggle("dark", theme === "dark");
  document.body.classList.toggle("light", theme === "light");
}

// 1) Preference hierarchy: saved user choice → system → default light
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(systemPrefersDark ? "dark" : "light");
}

// 2) Toggle click: switch + save to localStorage
toggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme || "light";

  // Ternary: if currentTheme is dark, switch to light; otherwise switch to dark
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
