import ElementHTML from "../const/element-HTML";
import AttackService from "../service/attack-service";
import Attacks from "../component/attacks";

export default class Games {

    private elt = new ElementHTML();

    constructor() {
        this.listener();
        this.reload()
    };

    private reload() {
        this.elt.reload!.addEventListener("click", () => {
            document.location.reload();
        })
    }

    private listener() {
        this.elt.btnGame.forEach((event: any) => {
            event.addEventListener('click', () => {
                AttackService.Instance.setAttackSelected(event.dataset.nameGame);
                this.elt.yourChoice!.innerHTML = `Vous <strong>${AttackService.Instance.getAttackSelected()}</strong>`;
                new Attacks().factoryAttack(AttackService.Instance.getAttackSelected(), AttackService.Instance.getComputer());
            })
        });
    };
}