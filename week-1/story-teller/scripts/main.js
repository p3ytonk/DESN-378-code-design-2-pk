// week-1/story-teller/js/script.js

// Find elements
const img = document.querySelector('#storyImg');
const captionEl = document.querySelector('#story-caption');
const creditEl = document.querySelector('#photo-credit');
const dots = document.querySelectorAll('.dot');

const nameInput = document.querySelector('#nameInput');
const saveNameBtn = document.querySelector('#saveNameBtn');
const resetBtn = document.querySelector('#resetBtn');

// localStorage keys (stretch)
const STEP_KEY = 'mlkStoryStep';
const NAME_KEY = 'mlkStoryName';

// Story content (5 steps)
const steps = [
  {
    caption: "Click the photo to begin…",
    alt: "Black-and-white photo showing segregation-era separation in a public space.",
    credit: "Photo by Russel Lee"
  },
  {
    caption: "The divide wasn’t abstract. It was posted, enforced, and normalized in daily life.",
    alt: "Black-and-white photo representing segregation or separation in a public setting.",
    credit: "GPA Photo Archive / Flickr"
  },
  {
    caption: "People organized anyway while walking together and choosing courage over silence.",
    alt: "Black-and-white photo of a civil rights march with a crowd moving forward.",
    credit: "Michael Ochs Archives / Getty Images"
  },
  {
    caption: "The message held steady: dignity, justice, and nonviolence spoken into a nation listening.",
    alt: "Black-and-white photo of Martin Luther King Jr. speaking to a crowd.",
    credit: "Gorodenkoff - stock.adobe.com"
  },
  {
    caption: "The legacy is a practice. Service. Solidarity. The work carried forward. (Click to restart.)",
    alt: "Black-and-white photo symbolizing community service or reflection and legacy.",
    credit: "Source: BlackPast"
  }
];

// Track current step
let currentStep = 0;

// Helpers
function getName() {
  return (localStorage.getItem(NAME_KEY) || '').trim();
}

function personalize(text) {
  const n = getName();
  if (!n) return text;

  // subtle personalization (optional)
  return text.replace("People", `${n} watched as people`);
}

function updateProgress(stepIndex) {
  dots.forEach((dot, index) => {
    if (index <= stepIndex) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

function render(stepIndex) {
  captionEl.textContent = personalize(steps[stepIndex].caption);
  creditEl.textContent = steps[stepIndex].credit;

  img.src = `assets/images/image-${stepIndex + 1}.png`;
  img.alt = steps[stepIndex].alt;

  updateProgress(stepIndex);
  localStorage.setItem(STEP_KEY, String(stepIndex));
}

// Click advances story
img.addEventListener('click', () => {
  img.classList.toggle('flash');   // required class toggle
  img.classList.add('fadeout');
  setTimeout(() => img.classList.remove('fadeout'), 120);

  currentStep = (currentStep + 1) % steps.length;
  render(currentStep);
});

// Save name
saveNameBtn.addEventListener('click', () => {
  localStorage.setItem(NAME_KEY, nameInput.value.trim());
  render(currentStep);
});

// Reset progress + name
resetBtn.addEventListener('click', () => {
  localStorage.removeItem(STEP_KEY);
  localStorage.removeItem(NAME_KEY);

  nameInput.value = '';
  currentStep = 0;
  render(currentStep);
});

// Init on load
(function init() {
  const savedName = getName();
  if (savedName) nameInput.value = savedName;

  const savedStep = Number(localStorage.getItem(STEP_KEY));
  if (!Number.isNaN(savedStep) && savedStep >= 0 && savedStep < steps.length) {
    currentStep = savedStep;
  }

  render(currentStep);
})();
