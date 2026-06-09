function buyCar() {
    alert("Thanks For Buying Car!");
}


function showHome() {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("carsSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";
    clearSearch();
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
            resultBox.innerHTML += card.outerHTML;
            found = true;
        }
    });

    document.getElementById("notFound").style.display =
        found ? "none" : "block";
}


function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("searchResult").innerHTML = "";
    document.getElementById("notFound").style.display = "none";
}


window.onload = function () {
    showHome();
};
