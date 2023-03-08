const submitBtn = document.getElementById("submitBtn");
let details = document.getElementById("quote-details");
let users = document.getElementById("quote-user");


let obj = {
    quote1: {
        details: "hey this is a test",
        user: "this is made by me"
    }
};

class quotes{
    constructor(quote, user) {
        this.quote = details.value;
        this.user = users.value;
    }
}

function change_page() {
    let wew = details.value;
    window.location.href = "quote.html";
}

submitBtn.addEventListener("click", change_page);