import {dataAttack} from "../data/data-attack";
import ElementHTML from "../const/element-HTML";
import AttackService from "../service/attack-service";

export default class Attacks {

    private elt = new ElementHTML();
    public data = dataAttack;

    public display(message: string, color?: string) {
        this.elt.result!.innerHTML = message;
        this.elt.game!.classList.add("ninja");
        this.elt.computer!.innerHTML = `Adversaire: <strong>${AttackService.Instance.getComputer()}</strong>`;
        this.elt.reload!.classList.remove("ninja");
        this.elt.messages!.classList.add('ninja');
        this.elt.response!.classList.remove("ninja");
        this.elt.result!.classList.add("finish-message")
        if(color){
            this.elt.yourChoice!.style.backgroundColor = color;
            this.elt.yourChoice!.style.color = "white"
        }

    }

    public factoryAttack(attackUser: string, attackComputer: string) {
        let track: number | null = null;
        if (attackUser === attackComputer) {
            return this.display("Match Null 👊");
        }
        this.data.forEach((attack) => {
            if(attack.name === attackUser) {
                attack.lose.forEach((lose) => {
                    if(lose === attackComputer) {
                        return track = 1;
                    }
                })
            }
            this.result(track);
        });
    };

    public result(value: number | null) {
        if(value === 1 ) {
            return this.display("You Lose 😞", "red");
        } else {
            return this.display("You Win 🎉", "green");
        }
    };

}