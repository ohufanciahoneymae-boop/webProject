/* =========================
   SECRET NAME
========================= */

const SECRET_NAME = "hufancia";


/* =========================
   GET HTML ELEMENTS
========================= */

const openButton =
    document.getElementById("openButton");

const nameModal =
    document.getElementById("nameModal");

const closeModal =
    document.getElementById("closeModal");

const nameInput =
    document.getElementById("nameInput");

const unlockButton =
    document.getElementById("unlockButton");

const error =
    document.getElementById("error");

const surprise =
    document.getElementById("surprise");

const closeSurprise =
    document.getElementById("closeSurprise");

const celebrateButton =
    document.getElementById("celebrateButton");

const birthdayName =
    document.getElementById("birthdayName");

const confetti =
    document.getElementById("confetti");


/* =========================
   OPEN NAME POPUP
========================= */

openButton.addEventListener("click", () => {

    nameModal.classList.add("show");

    setTimeout(() => {

        nameInput.focus();

    }, 150);

});


/* =========================
   CLOSE NAME POPUP
========================= */

closeModal.addEventListener("click", () => {

    nameModal.classList.remove("show");

    error.textContent = "";

});


/* =========================
   UNLOCK BUTTON
========================= */

unlockButton.addEventListener(
    "click",
    unlockGift
);


/* =========================
   ENTER KEY
========================= */

nameInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            unlockGift();

        }

    }
);


/* =========================
   CHECK SECRET NAME
========================= */

function unlockGift() {

    const entered =
        nameInput.value.trim();


    /*
       toLowerCase() makes these
       all work:

       Hufancia
       HUFANCIA
       hufancia
    */

    if (
        entered.toLowerCase()
        === SECRET_NAME
    ) {

      birthdayName.textContent = "Honey Rose";


        nameModal.classList.remove("show");


        surprise.classList.add("show");


        nameInput.value = "";

        error.textContent = "";


        // Birthday confetti
        launchConfetti(90);

    }

    else {

        error.textContent =
            "💗 Almost! Try the secret name again.";

        nameInput.select();

    }

}


/* =========================
   CLOSE SURPRISE
========================= */

closeSurprise.addEventListener(
    "click",
    () => {

        surprise.classList.remove("show");

    }
);


/* =========================
   CELEBRATE BUTTON
========================= */

celebrateButton.addEventListener(
    "click",
    () => {

        launchConfetti(180);

    }
);


/* =========================
   CLICK OUTSIDE POPUP
========================= */

document.addEventListener(
    "click",
    (event) => {

        if (event.target === nameModal) {

            nameModal.classList.remove("show");

        }


        if (event.target === surprise) {

            surprise.classList.remove("show");

        }

    }
);


/* =========================
   CONFETTI FUNCTION
========================= */

function launchConfetti(amount) {

    confetti.innerHTML = "";


    const symbols = [
        "♥",
        "✦",
        "★",
        "●",
        "🎀"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.fontSize =
            8 + Math.random() * 15 + "px";


        piece.style.animationDuration =
            2.5 + Math.random() * 3 + "s";


        piece.style.animationDelay =
            Math.random() * .8 + "s";


        piece.style.color =
            [
                "#e94d7a",
                "#bd365e",
                "#9be34d",
                "#f4b942",
                "#7c6be8"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];


        confetti.appendChild(piece);

    }


    setTimeout(() => {

        confetti.innerHTML = "";

    }, 6500);

}