//product 



function calculateAverage(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) { // 
    total += numbers[i];
  }

  let average = total / numbers.length;
  return average; // 
}

const scores = [10, 20, 30, 40, 50];
const result = calculateAverage(scores); // 
console.log("Average is:", result);

// Modal logic

document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("openModal");
  let span = document.getElementsByClassName("close")[0];

  if (btn && modal && span) {
    btn.onclick = function () {
      modal.style.display = "block";
    };

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  } else {
    console.warn("Modal elements not found in the DOM.");
  }
});


// funkcje które będą sprawdzać czy dane wprowadzone w formularz są prawidlowe
function validateUserInfo(username, email) {
  if (username.length < 3) {
    console.log("Username must be at least 3 characters long.");
    return false;
  }
  if (!email.includes("@")) {
    console.log("Invalid email address.");
    return false;
  }
  return true;
}

function registerUser(username, email) {
  if (!validateUserInfo(username, email)) {
    return false;
  }
  console.log("User registered successfully!");
  return true;
}

// Przykład działania
// registerUser("user", "user@example.com");

// KISS | After

function getItem(itemId, items) {
  if (!items || items.length === 0) {
    return null;
  }

  const item = items.find((item) => item.id === itemId);
  return item || null;
}

const itemList = [
  { id: 1, name: "Item A" },
  { id: 2, name: "Item B" },
];

const foundItem = getItem(1, itemList);
if (foundItem) {
  console.log("Item found:", foundItem);
} else {
  console.log("Item not found.");
}

// Fail Fast | After

function processData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    console.log("Invalid input: data should be a non-empty array.");
    return [];
  }

  let result = [];

  for (let i = 0; i < data.length; i++) {
    let number = data[i];

    if (typeof number !== "number") {
      console.log(`Invalid item at index ${i}: ${number} is not a number.`);
      return [];
    }

    let squared = number * number;
    result.push(squared);
  }

  console.log("Data processed successfully:", result);
  return result;
}

const inputData = [1, 2, "three", 4];
const outputData = processData(inputData);

// YAGNI | after

function authenticateUser(username, password) {
  if (username === "admin" && password === "password123") {
    console.log("User authenticated");
    return true;
  } else {
    console.log("Authentication failed");
    return false;
  }
}

authenticateUser("admin", "password123");

// DRY | After

function validateFullUserInfo(username, email, password) {
  if (username.length < 3) {
    console.log("Username must be at least 3 characters long.");
    return false;
  }
  if (!email.includes("@")) {
    console.log("Invalid email address.");
    return false;
  }
  if (password.length < 6) {
    console.log("Password must be at least 6 characters long.");
    return false;
  }
  return true;
}

function registerUserExtended(username, email, password) {
  if (!validateFullUserInfo(username, email, password)) {
    return false;
  }
  console.log("User registered successfully!");
  return true;
}

function registerAdmin(username, email, password) {
  if (!validateFullUserInfo(username, email, password)) {
    return false;
  }
  console.log("Admin registered successfully!");
  return true;
}

registerUserExtended("user", "user@example.com", "password123");
registerAdmin("admin", "admin@example.com", "adminpass");




