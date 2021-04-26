import ElementHTML from "../const/element-HTML";
import AttackService from "../service/attack-service";
import {dataAttack} from "../data/data-attack";

export default class SelectOptions {

    private elt = new ElementHTML();
    private countOptionSelectedByPlayer!: number;

    constructor() {
        this.onInit()
        this.listener();
        this.valid();
    };

    private onInit() {
        this.countOptionSelectedByPlayer = document.querySelectorAll(".btn-select").length;
    }

    private valid() {
        this.elt.valid!.addEventListener("click", () => {
            this.elt.selectOption?.classList.add('ninja');
            this.elt.game?.classList.remove('ninja');
            this.elt.valid?.classList.add('ninja')
            this.elt.messages!.innerHTML = "Good luck 🍀";
            this.elt.messages!.classList.remove("ninja");
            const computer: any = AttackService.Instance.getArrayAttack()[Math.round(Math.random() * (AttackService.Instance.getArrayAttack().length - 1))];
            AttackService.Instance.setComputerObj(computer)
        });
    };

    private listener() {
        this.elt.btnSelect.forEach((event: any) => {
            event.addEventListener('click', () => {
                let allBtnElt = document.querySelector(`[data-id-game = "${event.dataset.id}"]`);
                if (allBtnElt!.classList.contains("ninja")) {
                    this.countOptionSelectedByPlayer++
                    allBtnElt!.classList.remove("ninja");
                    event.style.backgroundColor = "whitesmoke";
                    event.style.color = "black";
                    AttackService.Instance.setArrayAttack(dataAttack[event.dataset.id]);
                } else {
                    if(this.countOptionSelectedByPlayer > 1) {
                        this.countOptionSelectedByPlayer--
                        allBtnElt!.classList.add("ninja");
                        event.style.backgroundColor = "red";
                        event.style.color = "white";
                        AttackService.Instance.setArrayAttack(dataAttack[event.dataset.id]);
                    }
                }
                this.elt.selectedOptionToPlay!.innerHTML = `${this.countOptionSelectedByPlayer}`;
            });
        });
    };


}