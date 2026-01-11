// ================================
// BEHAVIORAL LAYER LAB (main.js)
// ================================

/*
  EXPLAIN LIKE I'M 5:
  querySelector is like picking ONE thing from the page.
  We grab the heading, the image, and the button so we can control them.
*/
const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
const myButton = document.querySelector("button");

/*
  EXPLAIN LIKE I'M 5:
  addEventListener is like telling the image:
  "When someone clicks you, do the swap trick!"
*/
myImage.addEventListener("click", () => {
  /*
    EXPLAIN LIKE I'M 5:
    We read the image’s current "src" (its filename/path).
    If it's one picture, we switch to the other.
  */
  const mySrc = myImage.getAttribute("src");

  // Update these file names to YOUR two custom images (same dimensions).
if (mySrc === "images/fox1.png") {
  myImage.setAttribute("src", "images/foxy2.jpg");
  myImage.setAttribute("alt", "A second fox image you chose.");
} else {
  myImage.setAttribute("src", "images/foxy1.jpg");
  myImage.setAttribute("alt", "Up close fox eye");
}

/*
  EXPLAIN LIKE I'M 5:
  localStorage is like a tiny sticky note the browser remembers.
  We store your name so it still shows up after you refresh.
*/
function setUserName() {
  const myName = prompt("Please enter your name.");

  // If they hit Cancel or leave it blank, ask again.
  if (!myName) {
    setUserName();
    return;
  }

  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

/*
  EXPLAIN LIKE I'M 5:
  When the page loads, check if we already saved a name.
  If not, ask for it. If yes, use it.
*/
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

/*
  EXPLAIN LIKE I'M 5:
  The button is for changing the saved name.
*/
myButton.addEventListener("click", () => {
  setUserName();
});

/*
  SUMMARY:
  This file does two things:
  1. When you click the image, it switches between two image files by checking and updating the img "src".
  2. It asks for your name, puts it in the h1, and saves it in localStorage so it stays after refreshing.

  The key pattern I learned: find → listen → respond
*/
