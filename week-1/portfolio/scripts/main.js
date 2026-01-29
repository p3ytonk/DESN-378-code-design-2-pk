const toggle = document.querySelector(".theme-toggle");

document.documentElement.setAttribute("data-theme", "light");

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
});
// ========================================
// THEME SYSTEM WITH PREFERENCES
// ========================================
​
// 1. Load saved theme (runs immediately)
const savedTheme = localStorage.getItem('theme');
​
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
​
  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}
​
// 2. Toggle on click
const toggle = document.querySelector('.theme-toggle');
​
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;
​
  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }
​
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});
