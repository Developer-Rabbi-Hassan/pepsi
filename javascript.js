function first_image() {
    document.getElementById("pepsi-img").src = "pepsi001.png";
    document.getElementsByClassName('wrapper')[0].style.backgroundColor = "blue";
    document.getElementsByClassName('first-p')[0].innerHTML = "Do you like pepsi?";
}

function second_image() {
    document.getElementById("pepsi-img").src = "pepsi002.png";
    document.getElementsByClassName('wrapper')[0].style.backgroundColor = "red";
    document.getElementsByClassName('first-p')[0].innerHTML = "I love pepsi";
}

function third_image() {
    document.getElementById("pepsi-img").src = "pepsi003.png";
    document.getElementsByClassName('wrapper')[0].style.backgroundColor = "black";
    document.getElementsByClassName('first-p')[0].innerHTML = "Pepsi is refreshment";
}