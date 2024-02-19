// Initialize the total number of seats available
let totalSeats = 8;
// Initialize the number of selected seats
let selectedSeats = 0;
let singlePrice = 550;
let grandTotalPrice = 0;
let abc = "eco";

// ********************
// const selectedSeats = [];

// Add event listeners to all buttons with class 'seat'
const seatButtons = document.querySelectorAll(".seat");

// Add event listeners to each button using for...of loop
for (const button of seatButtons) {
  button.addEventListener("click", function () {
    // Call toggleSeat function passing the ID of the clicked button
    toggleSeat(button.id);
    // addSeat(button.id);
  });
}

// ****************************************
function addSeat(seatId) {
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = seatId + "Economy" + "500 .Tk";

  //   const span = document.createElement("span");
  //   span.innerText = "Economy";
  //   const h2 = document.createElement("h2");
  //   h2.innerText = "500 .TK";
  listContainer.appendChild(li);

  //   listContainer.innerText = seatId;
  //   const listContainer1 = document.getElementById("title-list1");
  //   const a = (listContainer1.innerText = "Economy");
  //   const listContainer2 = document.getElementById("title-list2");
  //   const b = (listContainer2.innerText = "500 .TK");
}

function rmSeat(seatId) {
  const titleList = document.getElementById("title-list");
  const lis = titleList.querySelectorAll("li");
  for (const li of lis) {
    if (li.textContent.includes(seatId + "Economy" + " 550 .Tk")) {
      li.remove();
      break;
    }
  }
}
// ****************************************

// Function to toggle the selected state of a seat
function toggleSeat(seatId) {
  // Get the button element corresponding to the seat ID
  const seatButton = document.getElementById(seatId);

  // If the button is already selected
  if (seatButton.classList.contains("selected")) {
    // Decrease the count of selected seats
    selectedSeats--;
    // Increase the count of total available seats
    totalSeats++;
    // *****************************************
    // addSeat(seatId);
    rmSeat(seatId);
    // const li = document.createElement("li");
    // li.textContent = seatId;
    // titleList.appendChild(li);
    // *****************************************
  } else {
    // If selecting the button would exceed the maximum allowed seats
    if (selectedSeats >= 4) {
      // Show an alert indicating that the maximum number of seats has been reached
      alert("You can't select more than 4 seats.");
      // Return to exit the function without further execution
      return;
    }
    // Increase the count of selected seats
    selectedSeats++;
    // Decrease the count of total available seats
    totalSeats--;
    // rmSeat(seatId)
    // *****************************************
    addSeat(seatId);

    // *****************************************
  }

  // Toggle the 'selected' class of the button
  seatButton.classList.toggle("selected");
  // Update the displayed total seats count
  updateTotalSeats();
}

// Function to update the total seats count displayed on the page
function updateTotalSeats() {
  // Get the total seats element by its ID
  const totalSeatsElement = document.getElementById("totalSeats");
  const selectedSeatsElement = document.getElementById("selectedSeats");
  const totalPriceElement = document.getElementById("totalPrice");
  const grandTotalPriceElement = document.getElementById("grandTotalPrice");
  // Update the text content of the total seats element with the current total seats count
  totalSeatsElement.innerText = totalSeats;
  selectedSeatsElement.innerText = selectedSeats;
  totalPrice = selectedSeats * singlePrice;
  totalPriceElement.innerText = totalPrice + " TK";
  grandTotalPrice = totalPrice;
  grandTotalPriceElement.innerText = grandTotalPrice + " TK";

  const btnPurchase = document.getElementById("applyCoupon");
  // if (selectedSeats == 4) {
  //     // btnPurchase.removeAttribute("disabled");
  // } else {
  //     // btnPurchase.setAttribute("disabled", "true");
  //     alert("please book 4 seats")
  // }
}
// *********************************************

document.getElementById("applyCoupon").addEventListener("click", function () {
  const inputFieldElement = document.getElementById("cupon");
  const inputField = inputFieldElement.value;
  // Initialize grand total price with the total price
  const btnPurchase = document.getElementById("applyCoupon");
  // Get the value of the coupon input

  if (inputField === "NEW15") {
    // Check if the coupon is 'abc'
    // grandTotalPrice = totalPrice - (totalPrice * 0.15); // Subtract 200 from the grand total price
    // inputFieldElement.value = '';
    // btnPurchase.setAttribute("disabled", "true");
    if (selectedSeats != 4) {
      alert("please book 4 seats");
    } else {
      grandTotalPrice = totalPrice - totalPrice * 0.15;
      inputFieldElement.value = "";
      btnPurchase.setAttribute("hidden", "true");
      inputFieldElement.setAttribute("hidden", "true");
    }
  } else if (inputField === "Couple20") {
    if (selectedSeats != 4) {
      alert("please book 4 seats");
    } else {
      grandTotalPrice = totalPrice - totalPrice * 0.2;
      inputFieldElement.value = "";
      btnPurchase.setAttribute("hidden", "true");
      inputFieldElement.setAttribute("hidden", "true");
    }
  } else if (inputField === "") {
    alert("please enter coupon code");
  } else {
    // If the coupon is not 'abc', show an alert
    alert("Coupon code is not correct.");
  }

  document.getElementById("grandTotalPrice").innerText =
    grandTotalPrice + " TK";
});
// *********************************************
