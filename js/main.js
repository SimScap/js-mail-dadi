const listEmail = ["mario@gmail.com", "maria@gmail.com", "tizio@gmail.com", "tizia@gmail.com", "cesco@gmail.com", "cesca@gmail.com", "afro@gmail.com"];

const inputEmail = document.getElementById("input-email");
let emailHelp = document.getElementById("email-help");

function myFunction() {
    for (let i = 0; i < listEmail.length; i++) {
        if (inputEmail.value == listEmail[i]) {
            emailHelp.classList.add("text-success");
            emailHelp.innerHTML = "la tua email è corretta";
            break
        } else {
            emailHelp.classList.add("text-warning");
            emailHelp.innerHTML = "la tua email è sbagliata";
        }
    }
}

const numberUserElem = document.getElementById("number-user");
const numberComputerElem = document.getElementById("number-computer");
const resultNumberElem = document.getElementById("result-number");

document.getElementById("click-joke").addEventListener('click', function () {
    let numberUser = Math.floor(Math.random() * 6) + 1;
    let numberComputer = Math.floor(Math.random() * 6) + 1;

    numberUserElem.innerHTML = numberUser;
    numberComputerElem.innerHTML = numberComputer;

    if (numberUser == numberComputer) {

    } else if (numberUser > numberComputer) {

    } else {
    }

})