export default class ElementHTML {
    // view
    public selectOption: HTMLDivElement | null = document.querySelector('.select-option');
    public game: HTMLDivElement | null = document.querySelector('.game');
    public messages: HTMLDivElement | null = document.querySelector('.messages');
    public count: HTMLElement | null = document.querySelector('.count');
    public yourChoice: HTMLElement | null = document.querySelector('.your-choice')
    // button
    public btnGame: NodeListOf<Element> = document.querySelectorAll(".btn-game")
    public btnSelect: NodeListOf<Element> = document.querySelectorAll('.btn-select');
    public valid: HTMLDivElement | null = document.querySelector('.valid-option');
}