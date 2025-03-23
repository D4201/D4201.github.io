// Efek Mengetik
const text = "Kamu adalah bintang yang selalu bersinar di hatiku... ✨";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = function () {
    typeEffect();
};

// Popup Foto Profil
const popup = document.getElementById("profile-popup");
const btn = document.getElementById("show-profile");
const closeBtn = document.querySelector(".close");

btn.onclick = function () {
    popup.style.display = "flex";
};

closeBtn.onclick = function () {
    popup.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
};
