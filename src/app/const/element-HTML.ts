export default class ElementHTML {
    // view
    public selectOption: HTMLDivElement | null = document.querySelector('.select-option');
    public game: HTMLDivElement | null = document.querySelector('.game');
    public messages: HTMLDivElement | null = document.querySelector('.messages');
    public computer: HTMLElement | null = document.querySelector('.computer');
    public yourChoice: HTMLElement | null = document.querySelector('.your-choice');
    public result: HTMLElement | null = document.querySelector(".result");
    public reload: HTMLElement | null = document.querySelector(".reload");
    public response: HTMLElement | null = document.querySelector(".response");
    // button
    public btnGame: NodeListOf<Element> = document.querySelectorAll(".btn-game")
    public btnSelect: NodeListOf<Element> = document.querySelectorAll('.btn-select');
    public valid: HTMLDivElement | null = document.querySelector('.valid-option');
}