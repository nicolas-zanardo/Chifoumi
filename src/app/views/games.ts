import ElementHTML from "../const/element-HTML";
import AttackService from "../service/attack-service";
import Attacks from "../component/attacks";
import {dataAttack} from "../data/data-attack";

export default class Games {

    private elt = new ElementHTML();
    private computer = dataAttack[Math.round(Math.random() * (AttackService.Instance.getArrayAttack().length - 1))];

    constructor() {
        this.listener();
    }

    private listener() {
        this.elt.btnGame.forEach((event: any) => {
            event.addEventListener('click', () => {
                AttackService.Instance.setAttackSelected(event.dataset.idGame);
                this.elt.yourChoice!.innerHTML = AttackService.Instance.getAttackSelected();
                new Attacks().factoryAttack(AttackService.Instance.getAttackSelected(), this.computer.name);

            })
        })
    }
}