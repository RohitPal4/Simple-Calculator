
function solve() {
    const divi = document.getElementById("divi");
    const mult = document.getElementById("mult");
    const add = document.getElementById("add");
    const sub = document.getElementById("sub");
    const result = document.getElementById("result");
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);

    if (isNaN(first) || isNaN(second)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    if (divi.checked) {
        if (second === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        temp = (first / second);
        result.textContent = `Division of ${first} and ${second} is: ` + temp;
    }
    else if (mult.checked) {
        temp = first * second;
        result.textContent = `Multiplication of ${first} and ${second} is: ` + temp;
    }
    else if (add.checked) {
        temp = first + second;
        result.textContent = `Addition of ${first} and ${second} is: ` + temp;
    }
    else if (sub.checked) {
        temp = first - second;
        result.textContent = `Substraction of ${first} and ${second} is: ` + temp;
    }
    else {
        result.textContent = "Please Select a Option!"
    }
}



function toggleDarkMode() {
    const darkModeButton = document.getElementById("darkmode");
    const body = document.body;
    
    
    body.classList.toggle("dark-mode");
    
    
    if (body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "☀️"; 
        localStorage.setItem("darkMode", "enabled"); 
    } else {
        darkModeButton.textContent = "🌙"; 
        localStorage.removeItem("darkMode"); 
    }
}


function applyDarkModePreference() {
    const body = document.body;
    const darkModePreference = localStorage.getItem("darkMode");

    if (darkModePreference === "enabled") {
        body.classList.add("dark-mode");
    }
}


window.addEventListener("DOMContentLoaded", applyDarkModePreference);


