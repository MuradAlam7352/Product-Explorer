
const button = document.getElementById("startBtn");
button.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter your email.");
    } else {
        alert("Welcome to Netflix!\nEmail: " + email);
    }
});
const questions = document.querySelectorAll(".question");
questions.forEach(function (item) {
    item.addEventListener("click", function () {

        if (this.style.background === "rgb(68, 68, 68)") {
            this.style.background = "#303030";
        } else {
            this.style.background = "#444";
        }

    });

});