// funzione per gestire responsività form
function handleFormAttribute() {
  const inputTag = document.querySelectorAll("input");
  const textAreaTag = document.querySelector("textarea");

    if (window.innerWidth <= 600) {
        inputTag[0].setAttribute("placeholder", "Nome");
        inputTag[1].setAttribute("placeholder", "Email");
        textAreaTag.setAttribute("placeholder", "Messaggio");
        }

        else {
          inputTag[0].removeAttribute("placeholder");
          inputTag[1].removeAttribute("placeholder");
          textAreaTag.removeAttribute("placeholder");
        }
    };

// inizializzazione
window.addEventListener("DOMContentLoaded", handleFormAttribute);

// aggiornamento a resize
window.addEventListener("resize", handleFormAttribute);