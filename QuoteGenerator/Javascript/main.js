const submitBtn = document.getElementById("submitBtn");
let details = document.getElementById("quote-details");
let users = document.getElementById("quote-user");
const PLACEHOLDERBTN = document.getElementById("placeholder")
const CURTAIN = document.getElementById("curtain");
const CANVA = document.getElementById("canca")
let test123 = CANVA.getContext("2d");


function change_page() {
    CURTAIN.classList.toggle("hidden");
    test123.fillText(details.value, (CANVA.width / 2) - 17, (CANVA.height / 2) + 8);
}

submitBtn.addEventListener("click", change_page);
PLACEHOLDERBTN.addEventListener("click", change_page);