import "./styles/style.scss";
import SelectOptions from "./app/views/select-options";
import Games from "./app/views/games";

const spinner = document.querySelector('#spinner')!;
window.addEventListener('load',()=> {
    spinner.classList.add("visually-hidden");
})

new SelectOptions();
new Games();