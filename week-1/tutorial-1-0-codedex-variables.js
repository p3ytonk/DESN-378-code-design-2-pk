​// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Peyton Whiteley
// Date: 01.13.26
// ============================================

// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
const firstName = "Peyton";
const favoriteColor = "Red";

let currentLocation = "Spokane, WA";
let mood = "Tired";

console.log("My Profile: ");
console.log(firstName);
console.log(favoriteColor);
console.log(currentLocation);
console.log(mood); 
// --------------------------------------------
// --------------------------------------------
// EXERCISE 7: DATA TYPES
const companyName = "Pepsi";
const foundingYear = 1893;
let isActive = true;
let fundingAmount = undefined;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);
// --------------------------------------------
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
let temp_f = 44;
let temp_c = (temp_f - 32) / 1.8;

console.log(temp_c); 6.67
// --------------------------------------------
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
let billAmount = 92.3;
let tipPercent = 18;
let tipAmount = billAmount * (tipPercent / 100);
let total = billAmount + tipAmount;

console.log("===== RECEIPT =====");
console.log("Bill: $" + billAmount.toFixed(2));
console.log("Tip (" + tipPercent + "%): $" + tipAmount.toFixed(2));
console.log("Total: $" + total.toFixed(2));
console.log("===================");
// --------------------------------------------
// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
let numSongs = 252;
let avgSongLength = 3.5;
let totalMinutes = numSongs * avgSongLength;
let hours = Math.floor(totalMinutes / 60);
let minutes = Math.round(totalMinutes % 60);
if (minutes === 60) {
  hours += 1;
  minutes = 0;
}

console.log("Playlist Summary");
console.log("Songs: " + numSongs);
console.log("Avg length: " + avgSongLength + " min");
console.log("Total: " + totalMinutes.toFixed(1) + " minutes");
console.log("That’s about " + hours + " hour(s) and " + minutes + " minute(s).");
// --------------------------------------------​
