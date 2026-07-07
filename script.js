/*==================================================
HAPPY BIRTHDAY SONU
FINAL SCRIPT
PART 1
==================================================*/

/* -----------------------------
WELCOME SCREEN
----------------------------- */

const welcomeScreen = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enter-btn");

if (enterBtn && welcomeScreen) {

    enterBtn.addEventListener("click", () => {

        welcomeScreen.style.opacity = "0";

        setTimeout(() => {

            welcomeScreen.style.display = "none";

        }, 800);

    });

}

/* -----------------------------
BUTTONS
----------------------------- */

const wishBtn = document.getElementById("wishBtn");
const galleryBtn = document.getElementById("galleryBtn");
const cakeBtn = document.getElementById("cakeBtn");

if (wishBtn) {

    wishBtn.addEventListener("click", () => {

        alert(
            "💜 Happy Birthday Sonu! ❤️\n\nMay all your dreams come true.\nHave a wonderful birthday! 🎂"
        );

    });

}

if (galleryBtn) {

    galleryBtn.addEventListener("click", () => {

        const gallery = document.getElementById("gallery");

        if (gallery) {

            gallery.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

/* -----------------------------
CAKE
----------------------------- */

if (cakeBtn) {

    cakeBtn.addEventListener("click", () => {

        alert(
            "🎂 Blow the candle...\n\n💜 Happy Birthday Sonu ❤️"
        );

        for (let i = 0; i < 80; i++) {

            createConfetti();

        }

    });

}

/* -----------------------------
MUSIC
----------------------------- */

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

if (musicBtn && music) {

    music.volume = 0.8;

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            music.play();

            playing = true;

            musicBtn.innerHTML = "⏸ Pause Music";

        }

        else {

            music.pause();

            playing = false;

            musicBtn.innerHTML = "🎵 Play Birthday Music";

        }

    });

}

/* -----------------------------
AUTO PLAY AFTER FIRST CLICK
----------------------------- */

document.body.addEventListener("click", () => {

    if (music && !playing) {

        music.play();

        playing = true;

        if (musicBtn) {

            musicBtn.innerHTML = "⏸ Pause Music";

        }

    }

}, {

    once: true

});

/* -----------------------------
PHOTO GALLERY
----------------------------- */

const photos = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

if (photos.length && lightbox && lightboxImage) {

    photos.forEach(photo => {

        photo.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImage.src = photo.src;

        });

    });

}

if (closeLightbox && lightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

/* -----------------------------
KEYBOARD SHORTCUTS
----------------------------- */

document.addEventListener("keydown", (e) => {

    if (e.key === "g" || e.key === "G") {

        if (galleryBtn) galleryBtn.click();

    }

    if (e.key === "m" || e.key === "M") {

        if (musicBtn) musicBtn.click();

    }

});

console.log("💜 Part 1 Loaded Successfully");
/*==================================================
HAPPY BIRTHDAY SONU
FINAL SCRIPT
PART 2
Animated Background + Fireworks + Confetti
==================================================*/

/* -----------------------------
STARS
----------------------------- */

const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        stars.appendChild(star);

    }

}

/* -----------------------------
HEARTS
----------------------------- */

const hearts = document.getElementById("hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "💜" : "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 500);

/* -----------------------------
BALLOONS
----------------------------- */

const balloons =
document.getElementById("balloons");

const balloonEmoji = [

"🎈",

"🎈",

"🎉",

"🎈"

];

function createBalloon() {

    if (!balloons) return;

    const balloon =
    document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML =
        balloonEmoji[
        Math.floor(Math.random() *
        balloonEmoji.length)
        ];

    balloon.style.left =
        Math.random() * 100 + "%";

    balloon.style.animationDuration =
        (8 + Math.random() * 4) + "s";

    balloons.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 13000);

}

setInterval(createBalloon, 1700);

/* -----------------------------
BUTTERFLIES
----------------------------- */

const butterflies =
document.getElementById("butterflies");

function createButterfly() {

    if (!butterflies) return;

    const butterfly =
    document.createElement("div");

    butterfly.className = "butterfly";

    butterfly.innerHTML = "🦋";

    butterfly.style.top =
        Math.random() * 80 + "%";

    butterfly.style.animationDuration =
        (10 + Math.random() * 5) + "s";

    butterflies.appendChild(butterfly);

    setTimeout(() => {

        butterfly.remove();

    }, 15000);

}

setInterval(createButterfly, 3500);

/* -----------------------------
SPARKLES
----------------------------- */

const sparkles =
document.getElementById("sparkles");

function createSparkle() {

    if (!sparkles) return;

    const sparkle =
    document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";

    sparkles.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}

setInterval(createSparkle, 250);

/* -----------------------------
FIREWORKS
----------------------------- */

const canvas =
document.getElementById("fireworksCanvas");

const ctx =
canvas ? canvas.getContext("2d") : null;

function resizeCanvas() {

    if (!canvas) return;

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

if (canvas) {

    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );

}

function firework() {

    if (!ctx || !canvas) return;

    const x =
    Math.random() * canvas.width;

    const y =
    Math.random() * canvas.height / 2;

    for (let i = 0; i < 60; i++) {

        const px =
        x + (Math.random() - 0.5) * 160;

        const py =
        y + (Math.random() - 0.5) * 160;

        ctx.beginPath();

        ctx.arc(
            px,
            py,
            2,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        `hsl(${Math.random()*360},100%,70%)`;

        ctx.fill();

    }

    setTimeout(() => {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

    }, 700);

}

/* -----------------------------
CONFETTI
----------------------------- */

const confettiContainer =
document.getElementById(
"confetti-container"
);

function createConfetti() {

    if (!confettiContainer) return;

    const piece =
    document.createElement("div");

    piece.innerHTML = "🎉";

    piece.style.position = "fixed";

    piece.style.left =
        Math.random() * 100 + "vw";

    piece.style.top = "-30px";

    piece.style.fontSize =
        (18 + Math.random() * 18) + "px";

    piece.style.transition =
        "4s linear";

    piece.style.zIndex = "999";

    confettiContainer.appendChild(piece);

    setTimeout(() => {

        piece.style.transform =
        "translateY(110vh) rotate(720deg)";

    }, 50);

    setTimeout(() => {

        piece.remove();

    }, 4200);

}

console.log("💜 Part 2 Loaded Successfully");
/*==================================================
HAPPY BIRTHDAY SONU
FINAL SCRIPT
PART 3A
Loader + Progress + Cursor + Grand Finale
==================================================*/

/* -----------------------------
LOADER
----------------------------- */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 1500);

    }

});

/* -----------------------------
PROGRESS BAR
----------------------------- */

window.addEventListener("scroll", () => {

    const progressBar =
    document.getElementById("progressBar");

    if (!progressBar) return;

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    progressBar.style.width =
    progress + "%";

});

/* -----------------------------
CURSOR GLOW
----------------------------- */

const cursorGlow =
document.getElementById("cursorGlow");

if (cursorGlow) {

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left=e.clientX+"px";

cursorGlow.style.top=e.clientY+"px";

const heart=document.createElement("div");

heart.className="cursorHeart";

heart.innerHTML=Math.random()>0.5?"💜":"❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});

}

/* -----------------------------
FINAL SURPRISE
----------------------------- */

const transitionScreen =
document.getElementById("transitionScreen");

const grandFinale =
document.getElementById("grandFinale");

const finalBtn =
document.getElementById("finalSurpriseBtn");

if(finalBtn && transitionScreen && grandFinale){

finalBtn.addEventListener("click",()=>{

transitionScreen.style.display="flex";

setTimeout(()=>{

transitionScreen.style.display="none";

grandFinale.style.display="flex";

/* Mega Celebration */

for(let i=0;i<300;i++){

createConfetti();

}

for(let i=0;i<8;i++){

setTimeout(firework,i*350);

}

},2500);

});

}

/* -----------------------------
GRAND FINALE CLOSE
----------------------------- */

const closeFinale =
document.getElementById("closeFinale");

const endingScreen =
document.getElementById("endingScreen");

if(closeFinale && grandFinale && endingScreen){

closeFinale.addEventListener("click",()=>{

grandFinale.style.display="none";

setTimeout(()=>{

endingScreen.style.display="flex";

},700);

});

}

console.log("💜 Part 3A Loaded Successfully");
/*==================================================
HAPPY BIRTHDAY SONU
FINAL SCRIPT
PART 3B
Gift + Share + Countdown + Secret RCB
==================================================*/

/* -----------------------------
SECRET GIFT
----------------------------- */

const giftBtn = document.getElementById("giftBtn");
const giftPopup = document.getElementById("giftPopup");
const closeGift = document.getElementById("closeGift");

if (giftBtn && giftPopup) {

    giftBtn.addEventListener("click", () => {

        giftPopup.style.display = "flex";

    });

}

if (closeGift && giftPopup) {

    closeGift.addEventListener("click", () => {

        giftPopup.style.display = "none";

    });

}

/* -----------------------------
SHARE BUTTON
----------------------------- */

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.addEventListener("click", () => {

        const url = window.location.href;

        const text =
        "💜 Happy Birthday Sonu! 🎂\n\n" + url;

        window.open(
            "https://wa.me/?text=" +
            encodeURIComponent(text),
            "_blank"
        );

    });

}

/* -----------------------------
COUNTDOWN BUTTON
----------------------------- */

const countdownBtn =
document.getElementById("countdownBtn");

if (countdownBtn) {

    countdownBtn.addEventListener("click", () => {

        const birthday =
        new Date("July 8, 2026 00:01:00");

        const now = new Date();

        const diff = birthday - now;

        if (diff <= 0) {

            alert("🎉 Happy Birthday Sonu! ❤️");

            return;

        }

        const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

        const hours =
        Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
        );

        const mins =
        Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
        );

        alert(
        `⏳ ${days} Days ${hours} Hours ${mins} Minutes Left 💜`
        );

    });

}

/* -----------------------------
QR BUTTON
----------------------------- */

const qrBtn =
document.getElementById("qrBtn");

if (qrBtn) {

    qrBtn.addEventListener("click", () => {

        alert(
        "📱 QR Code will be available after GitHub Hosting."
        );

    });

}

/* -----------------------------
SECRET RCB MODE
(Konami Code)
----------------------------- */

const secretCode = [
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
];

let entered = [];

const rcbSecret =
document.getElementById("rcbSecret");

const closeRCB =
document.getElementById("closeRCB");

document.addEventListener("keydown",(e)=>{

entered.push(e.key);

if(entered.length > secretCode.length){

entered.shift();

}

if(
JSON.stringify(entered) ===
JSON.stringify(secretCode)
){

if(rcbSecret){

rcbSecret.style.display="flex";

for(let i=0;i<150;i++){

createConfetti();

}

for(let i=0;i<8;i++){

setTimeout(firework,i*350);

}

}

}

});

if(closeRCB && rcbSecret){

closeRCB.addEventListener("click",()=>{

rcbSecret.style.display="none";

});

}

/* -----------------------------
FINAL MESSAGE
----------------------------- */

console.log("💜 Happy Birthday Sonu Website Loaded Successfully!");

console.log("🎂 Final Version Ready!");

console.log("❤️ Made With Love By Pratik");