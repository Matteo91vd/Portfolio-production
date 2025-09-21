// elementi a cui aggiungere/rimuovere classe dark
const bodyTag = document.querySelector("body");
const ulTag = document.querySelector("ul");
const liTag = document.querySelectorAll("li"); // tag li è già un array e non è inserito in tagArray
const aTag = document.querySelectorAll("a.navbar-item"); // tag a è già un array e non è inserito in tagArray
const headerTag = document.querySelector("header");
const sectionTag = document.querySelector("section");
const asideTag = document.querySelector("aside");
const mainTag = document.querySelector("main");
const footerTag = document.querySelector("footer");
const textAreaTag = document.querySelector("textarea");
const inputTag = document.querySelectorAll("input"); // tag button è già un array e non è inserito in tagArray
const buttonTag = document.querySelectorAll("button"); // tag button è già un array e non è inserito in tagArray
const labelTag = document.querySelectorAll("label"); // tag label è già un array e non è inserito in tagArray
const spanTag = document.querySelectorAll("span"); // tag span è già un array e non è inserito in tagArray
const divTag = document.querySelector("div.letter"); 

//raggruppamento singoli tag in un array
const tagArray = [bodyTag, ulTag, headerTag, sectionTag, asideTag, mainTag, footerTag, textAreaTag];

// tag img contatti
const contactsIcon = document.querySelectorAll("img.contacts-icon");

// tag img light/dark theme
const themeIcon = document.getElementById("button-theme");

//funzione cambio tema
function handleTheme() {
    tagArray.forEach(el => {el.classList.toggle("dark")});
    liTag.forEach(el => {el.classList.toggle("dark")});
    aTag.forEach(el => {el.classList.toggle("dark")});
    buttonTag.forEach(el => {el.classList.toggle("dark")});
    labelTag.forEach(el => {el.classList.toggle("dark")});
    inputTag.forEach(el => {el.classList.toggle("dark")});
    spanTag.forEach(el => {el.classList.toggle("dark")});

    if (bodyTag.classList.contains("dark")) {
        themeIcon.setAttribute("src", "https://img.icons8.com/?size=100&id=20183&format=png&color=FFFFFF");
        contactsIcon[0].setAttribute("src", "https://img.icons8.com/?size=100&id=SaUMpeyy7rHl&format=png&color=FFFFFF");
        contactsIcon[1].setAttribute("src", "https://img.icons8.com/?size=100&id=9659&format=png&color=FFFFFF");
        contactsIcon[2].setAttribute("src", "https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF");
        contactsIcon[3].setAttribute("src", "https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF");
        divTag.setAttribute("id", "dark");
    }

    else {
        themeIcon.setAttribute("src", "https://img.icons8.com/?size=100&id=20400&format=png&color=737373");
        contactsIcon[0].setAttribute("src", "https://img.icons8.com/?size=100&id=SaUMpeyy7rHl&format=png&color=000000");
        contactsIcon[1].setAttribute("src", "https://img.icons8.com/?size=100&id=9659&format=png&color=000000");
        contactsIcon[2].setAttribute("src", "https://img.icons8.com/?size=100&id=62856&format=png&color=000000");
        contactsIcon[3].setAttribute("src", "https://img.icons8.com/?size=100&id=98960&format=png&color=000000");
        divTag.removeAttribute("id");
    }
};


themeIcon.addEventListener("click", handleTheme);