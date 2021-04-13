import {dataAttack} from "../data/data-attack";

export default class AttackService {

    private static _instance: AttackService;
    private attackSelected: string = "";
    private arrayAttack: object[] = dataAttack;

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    public getAttackSelected() {
        return this.attackSelected;
    }

    public setAttackSelected(value: string) {
        this.attackSelected = value;
    }

    public getArrayAttack() {
        return this.arrayAttack;
    }

    public setArrayAttack(value: any) {
        // console.log('value: ', value)
        // console.log(this.arrayAttack);
        let track = undefined;
        this.arrayAttack.forEach((e) => {
            if(e === value) {
               return track = 1 ;
            }
        });

        if (track === 1) {
            let position = this.arrayAttack.indexOf(value);
            // console.log(position);
            this.arrayAttack.splice(position, 1);
        } else {
            this.arrayAttack.push(value);
        }
        // console.log(this.arrayAttack);


    }
}