import ElementHTML from "../const/element-HTML";
import AttackService from "../service/attack-service";
import {dataAttack} from "../data/data-attack";

export default class SelectOptions {

    private elt = new ElementHTML();

    constructor() {
        this.listener();
        this.valid();
    }

    private valid() {
        this.elt.valid!.addEventListener("click", () => {
            this.elt.selectOption?.classList.add('ninja');
            this.elt.game?.classList.remove('ninja');
            this.elt.valid?.classList.add('ninja')
            this.elt.messages!.innerHTML = "Start Game";
        })
    }

    private listener() {
        this.elt.btnSelect.forEach((event: any ) => {
            event.addEventListener('click', () => {
                let allBtnElt = document.querySelector(`[data-id-game = "${event.dataset.id}"]`);
                if (allBtnElt!.classList.contains("ninja")) {
                    allBtnElt!.classList.remove("ninja");
                    event.style.backgroundColor = "whitesmoke";
                    event.style.color = "black";
                } else {
                    allBtnElt!.classList.add("ninja");
                    event.style.backgroundColor = "red";
                    event.style.color = "white";
                }
                AttackService.Instance.setArrayAttack(dataAttack[event.dataset.id]);
                console.log(event.dataset.id)
                console.log("Select ",dataAttack[3])
            });
        });
    }


}