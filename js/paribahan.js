// Initialize the total number of seats available
let totalSeats = 28;
// Initialize the number of selected seats
let selectedSeats = 0;
let singlePrice = 550;
let grandTotalPrice = 0;
let abc = "eco";

// Add event listeners to all buttons with class 'seat'
const seatButtons = document.querySelectorAll(".seat");

for (const button of seatButtons) {
  button.addEventListener("click", function () {
    toggleSeat(button.id);
  });
}

let seatClass =
  "<span style='padding-left:85px; padding-right:65px'>economy</span>";
let seatFare = "550 Tk";

function addSeat(seatId) {
  const listContainer = document.getElementById("title-list");

  // Create a container div for the seat details
  const seatContainer = document.createElement("div");
  seatContainer.style.display = "flex";
  seatContainer.style.alignItems = "center";

  // Create the li element for the seat ID
  const li = document.createElement("li");
  li.innerText = seatId;

  // Create the span elements for class and fare
  const spanClass = document.createElement("span");
  spanClass.innerHTML = "Economy";
  const spanFare = document.createElement("span");
  spanFare.innerHTML = "550TK";

  spanClass.style.paddingLeft = "90px";
  spanFare.style.paddingLeft = "60px";

  seatContainer.appendChild(li);
  seatContainer.appendChild(spanClass);
  seatContainer.appendChild(spanFare);

  listContainer.appendChild(seatContainer);
}

//unselect double click on seat
function rmSeat(seatId) {
  const titleList = document.getElementById("title-list");
  const seatContainers = titleList.querySelectorAll("div");
  for (const seatContainer of seatContainers) {
    const li = seatContainer.querySelector("li");
    if (li.innerText === seatId) {
      seatContainer.remove();
      break;
    }
  }
}

// Function to toggle the selected state of a seat
function toggleSeat(seatId) {
  const seatButton = document.getElementById(seatId);

  if (seatButton.classList.contains("selected")) {
    selectedSeats--;

    totalSeats++;

    rmSeat(seatId);
  } else {
    if (selectedSeats >= 4) {
      alert("You can't select more than 4 seats.");

      return;
    }

    selectedSeats++;

    totalSeats--;

    addSeat(seatId);
  }

  // Toggle the 'selected' class of the button
  seatButton.classList.toggle("selected");
  updateTotalSeats();
}

// Function to update the total seats count displayed on the page
function updateTotalSeats() {
  const totalSeatsElement = document.getElementById("totalSeats");
  const selectedSeatsElement = document.getElementById("selectedSeats");
  const totalPriceElement = document.getElementById("totalPrice");
  const grandTotalPriceElement = document.getElementById("grandTotalPrice");
  totalSeatsElement.innerText = totalSeats;
  selectedSeatsElement.innerText = selectedSeats;
  totalPrice = selectedSeats * singlePrice;
  totalPriceElement.innerText = totalPrice + " TK";
  grandTotalPrice = totalPrice;
  grandTotalPriceElement.innerText = grandTotalPrice + " TK";

  const btnPurchase = document.getElementById("applyCoupon");
}

document.getElementById("applyCoupon").addEventListener("click", function () {
  const inputFieldElement = document.getElementById("cupon");
  const inputField = inputFieldElement.value;

  const btnPurchase = document.getElementById("applyCoupon");

  if (inputField === "NEW15") {
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
