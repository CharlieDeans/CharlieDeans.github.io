let name = prompt("What is your name?");
let speed = 50;
let score = 0;
let health = 100;

const nameField = document.getElementById("name");
const scoreField = document.getElementById("score");
const healthField = document.getElementById("health");
const buttons = document.getElementsByClassName("button");
const textField = document.getElementById("text");

nameField.innerHTML = name;
scoreField.innerHTML = score;
healthField.innerHTML = health;

// add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (score < 100 && health > 0) {
            if (buttons[i].id == "push") {
                addSpeed(10);
                checkPush();
            }
            else if (buttons[i].id == "ollie") {
                addSpeed(-5);
                checkOllie();
            }
            else if (buttons[i].id == "kickflip") {
                addSpeed(-10);
                checkKickFlip();
            }
            else if (buttons[i].id == "heelflip") {
                addSpeed(-15);
                checkHeelFlip();
            }
            else if (buttons[i].id == "pop-shove-it") {
                addSpeed(-20);
                checkPopShoveIt();
            }
            checkState();
        }
    });
    }

function updateText(text) {
    textField.innerHTML = text;
}

// function to update score
function updateScore(num) {
    if (score + num >= 100) {
        num = 100 - score;
    }
    score += num;
    scoreField.innerHTML = score;
}

// function to update health
function updateHealth() {
    health -= 10;
    healthField.innerHTML = health;
}

function addSpeed(num) {
    speed += num;
    updateText("You gained some speed!");
}

function checkPush() {
    if (speed > 75) {
        updateText("You're going very fast!");
    }
}

function checkOllie() {
    if (speed < 75 && speed > 25) {
        updateText("You did an Ollie!");
        updateScore(5);
    }
    else {
        updateText("You fell off your board!");
        updateHealth();
    }
}

function checkKickFlip() {
    if (speed < 70 && speed > 30) {
        updateText("You did a Kickflip!");
        updateScore(10);
    }
    else {
        updateText("You fell off your board!");
        updateHealth();
    }
}

function checkHeelFlip() {
    if (speed < 65 && speed > 35) {
        updateText("You did a Heelflip!");
        updateScore(15);
    }
    else {
        updateText("You fell off your board!");
        updateHealth();
    }
}

function checkPopShoveIt() {
    if (speed < 50 && speed > 15) {
        updateText("You did a Pop Shove-It!");
        updateScore(20);
    }
    else {
        updateText("You fell off your board!");
        updateHealth();
    }
}

function checkState() {
    if (health <= 0) {
        updateText("You died!");
        document.body.style.backgroundColor = "red";
    }
    else if (score >= 100) {
        updateText("You won!");
        document.body.style.backgroundColor = "green";
    }
}

