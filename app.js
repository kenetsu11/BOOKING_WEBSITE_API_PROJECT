/* Updated JavaScript (app.js) */
$(document).ready(() => {
  $("#hamburger-menu").click(() => {
    $("#hamburger-menu").toggleClass("active");
    $("#nav-menu").toggleClass("active");
  });

  let navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];

  $("#hero-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true,
  });

  $("#top-movies-slide").owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      500: { items: 3 },
      768: { items: 4 },
      1024: { items: 5 },
      1280: { items: 6 },
    },
  });

  $(".movies-slide").owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
      500: { items: 2 },
      768: { items: 3 },
      1024: { items: 4 },
      1280: { items: 5 },
    },
  });
});

var nameArr = [];
class getUserData {
  constructor(
    getName,
    getEmail,
    getMobile,
    numberOfSeats,
    day,
    showTime,
    price
  ) {
    this.name = getName;
    this.email = getEmail;
    this.mobile = getMobile;
    this.seats = numberOfSeats;
    this.day = day;
    this.showTime = showTime;
    this.price = price;
  }
}

var getData = () => {
  var getName = document.getElementById("inputName").value;
  var getEmail = document.getElementById("inputEmail").value;
  var getMobile = document.getElementById("inputMobile").value;
  var numberOfSeats = document.getElementById("inputSeats").value;
  var day = document.getElementById("day").value;
  var showTime = document.getElementById("showTime").value;
  if (day === "Today") {
    price = 450 * Number(numberOfSeats);
    var obj = new getUserData(
      getName,
      getEmail,
      getMobile,
      numberOfSeats,
      day,
      showTime,
      price
    );
    nameArr.push(obj);
  }

  if (day === "Day after tomorrow") {
    price = 350 * Number(numberOfSeats);
    var obj = new getUserData(
      getName,
      getEmail,
      getMobile,
      numberOfSeats,
      day,
      showTime,
      price
    );
  }

  if (day === "Tomorrow") {
    price = 550 * Number(numberOfSeats);
    var obj = new getUserData(
      getName,
      getEmail,
      getMobile,
      numberOfSeats,
      day,
      showTime,
      price
    );
  }

  var getName = document.getElementById("inputName").value;
  var dataString = JSON.stringify(obj);
  localStorage.setItem("obj", dataString);
  window.location.href = "payment.html";

  console.log(obj);
};

var paymentRedirectPage = () => {
  var headingShow = document.createElement("h2");
  var headingShowParent = document.querySelector("#show");
  headingShow.innerHTML = "Payment Window";
  headingShowParent.appendChild(headingShow);
  headingShow.setAttribute("class", "text-info");
  var newObj = localStorage.getItem("obj");
  var getObj = JSON.parse(newObj);

  var nameShow = document.createElement("h4");
  var nameShowParent = document.querySelector("#show");
  nameShow.innerHTML = "Name" + ": " + getObj.name;
  nameShowParent.appendChild(nameShow);

  var priceShow = document.createElement("h4");
  var priceShowParent = document.querySelector("#show");
  priceShow.innerHTML = "Price" + ": " + getObj.price + " Pesos";
  priceShowParent.appendChild(priceShow);

  var dayShow = document.createElement("h4");
  var dayShowParent = document.querySelector("#show");
  dayShow.innerHTML = "Day" + ": " + getObj.day;
  dayShowParent.appendChild(dayShow);

  var showTimeShow = document.createElement("h4");
  var showTimeShowParent = document.querySelector("#show");
  showTimeShow.innerHTML = "Show" + ": " + getObj.showTime;
  showTimeShowParent.appendChild(showTimeShow);
};

function getData() {
  console.log("Button clicked! Redirecting...");
  window.location.href = "payment.html"; // Ensure this file exists
}
