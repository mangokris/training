let buttons = document.getElementsByClassName("list-item-6");
let buttonMenu = document.getElementsByClassName("main__button-menu");
let button;
for (let i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.onclick = func;
}
let menu;

function func() {
    for (let j = 0; j < buttonMenu.length; j++) {
        menu = buttonMenu[j];
        if (menu.classList.contains("show__button-menu")) {
            menu.classList.remove("show__button-menu");
        }
        else {
            menu.classList.add("show__button-menu");
        }
    }
}

let planningButton = document.querySelector(".header__planning");
let sidePanel = document.querySelector(".planning-panel");
let main = document.querySelector(".main");
let headerContent = document.querySelector(".header__content");
let headerBurger = document.querySelector(".header__burger-div");
planningButton.onclick = showPanel;
function showPanel() {
    sidePanel.classList.add("show-panel");
    main.style.opacity = "0.1";
    headerContent.style.opacity = "0.1";
    headerBurger.style.opacity = "0.1";
}
let icon = document.getElementsByClassName("planning-panel__footer-icon");
let text = document.getElementsByClassName("planning-panel__footer-text");

for (let i = 0; i < icon.length; i++) {
    icon[i].onclick = switchActive;

    function switchActive() {
        if (text[i].classList.contains("planning-panel__footer-active")) {
            text[i].classList.remove("planning-panel__footer-active");
        }
        else {
            text[i].classList.add("planning-panel__footer-active");
        }
    }
}