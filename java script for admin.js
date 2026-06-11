fetch("http://localhost:3000/cars")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });


function showHome() {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("carsSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";
}

function showCars() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("carsSection").style.display = "flex";
    document.getElementById("contactSection").style.display = "none";
}

function showContact() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("carsSection").style.display = "none";
    document.getElementById("contactSection").style.display = "block";
}


function searchCar() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    let cards = document.querySelectorAll(".card");
    let resultBox = document.getElementById("searchResult");

    let found = false;

    resultBox.innerHTML = "";

    if (input === "") {
        document.getElementById("notFound").style.display = "none";
        return;
    }

    cards.forEach(card => {
        let name = card.querySelector(".car-name").innerText.toLowerCase();

        if (name.includes(input)) {
            resultBox.innerHTML += card.outerHTML; // show in HOME
            found = true;
        }
    });

    document.getElementById("notFound").style.display = found ? "none" : "block";
}


function addCar() {
    let name = document.getElementById("carName").value;
    let price = document.getElementById("carPrice").value;
    let image = document.getElementById("carImage").value;

    if (name === "" || price === "" || image === "") {
        alert("Please fill all fields");
        return;
    }

    let gallery = document.getElementById("carsGallery");

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${image}" alt="${name}">
        <div class="car-name">${name}</div>
        <span class="car-price">Rs ${price}</span>
        <div class="status">Available</div>
        <br>
        <button class="buy-btn" onclick="buyCar()">Buy</button>
    `;

    gallery.appendChild(card);

    let carList = document.getElementById("carList");

    let item = document.createElement("div");
    item.className = "car-card";

    item.innerHTML = `
        ${name}
        <button class="remove-btn">Remove</button>
    `;

    item.querySelector(".remove-btn").onclick = function () {
        item.remove();
        card.remove();
    };

    carList.appendChild(item);

    document.getElementById("carName").value = "";
    document.getElementById("carPrice").value = "";
    document.getElementById("carImage").value = "";
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("status")) {
        if (e.target.innerText.trim() === "Available") {
            e.target.innerText = "Unavailable";
            e.target.style.backgroundColor = "red";
            e.target.style.color = "white";
        } else {
            e.target.innerText = "Available";
            e.target.style.backgroundColor = "green";
            e.target.style.color = "white";
        }
    }
});

window.onload = function () {
    showHome();
};
function buyCar(btn) {
    let card = btn.parentElement;
    let status = card.querySelector(".status").innerText.trim();

    if (status === "Unavailable") {
        alert("Sorry, this car is not available!");
    } else {
        alert("Thanks for purchasing the car!");
    }
}
