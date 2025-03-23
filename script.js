// Efek Mengetik untuk Kata-Kata Pujian
const text = "Kamu adalah bintang yang selalu bersinar di hatiku... ✨";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        document.getElementById("typing-text").classList.add("centered"); // Pastikan tetap di tengah
    }
}

// Efek Mengetik untuk Kutipan LDR
const quote = "Pacaran jarak jauh memang tak semudah air yang jatuh, tetapi pacaran jarak jauh mampu menumbuhkan rindu yang utuh.";
let quoteIndex = 0;

function typeQuote() {
    if (quoteIndex < quote.length) {
        document.getElementById("typing-quote").innerHTML += quote.charAt(quoteIndex);
        quoteIndex++;
        setTimeout(typeQuote, 50);
    } else {
        document.getElementById("typing-quote").classList.add("centered"); // Pastikan tetap di tengah
    }
}

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

// Fixes audio auto play
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");
    let playButton = document.getElementById("play-music");

    function toggleMusic() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = "⏸ Pause Musik";
        } else {
            audio.pause();
            playButton.innerHTML = "▶ Play Musik";
        }
    }

    // Event listener untuk tombol musik
    playButton.addEventListener("click", toggleMusic);
});

// Mulai efek mengetik saat halaman dimuat
window.onload = function () {
    typeEffect();
    setTimeout(typeQuote, 3000); // Mulai efek mengetik kutipan setelah beberapa detik
};
