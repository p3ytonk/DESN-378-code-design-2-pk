const themeButtons = document.querySelectorAll(".theme-btn");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function getSystemTheme() {
  return mediaQuery.matches ? "dark" : "light";
}

function setPressedState(choice) {
  themeButtons.forEach((btn) => {
    const isActive = btn.dataset.themeChoice === choice;
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function applyThemeChoice(choice) {
  // Save preference on click (or apply from load)
  document.documentElement.dataset.themePreference = choice;

  if (choice === "light" || choice === "dark") {
    document.documentElement.dataset.theme = choice;
    localStorage.setItem("theme", choice);
    setPressedState(choice);
    return;
  }

  // System mode
  const systemTheme = getSystemTheme();
  document.documentElement.dataset.theme = systemTheme;
  localStorage.setItem("theme", "system");
  setPressedState("system");
}

function initTheme() {
  const saved = localStorage.getItem("theme"); // "light" | "dark" | "system" | null

  if (saved === "light" || saved === "dark") {
    applyThemeChoice(saved);
    return;
  }

  // Default to system if none saved or saved is "system"
  applyThemeChoice("system");
}

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyThemeChoice(btn.dataset.themeChoice);
  });
});

// Live OS changes only affect the page when user is in System mode
mediaQuery.addEventListener("change", () => {
  const pref = localStorage.getItem("theme") || "system";
  if (pref === "system") {
    document.documentElement.dataset.theme = getSystemTheme();
    setPressedState("system");
  }
});

initTheme();
