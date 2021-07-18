import {dataAttack} from "../data/data-attack";
import AttackModel from "../model/attack.model";

export default class AttackService {

    private static _instance: AttackService;
    private attackSelected: string = "";
    // Array of all attacks
    private arrayAttack: object[] = dataAttack;
    private arrayAttackTEMP: object[] = dataAttack;
    // Computer Attack
    private computerObj: AttackModel = {name: "", lose: [], inGame: true};

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    };

    public getAttackSelected() {
        return this.attackSelected;
    };

    public setAttackSelected(value: string) {
        this.attackSelected = value;
    };

    public getArrayAttack() {
        return this.arrayAttackTEMP;
    };

    public setArrayAttack(value: any) {
        this.arrayAttackTEMP = [];
          this.arrayAttack.forEach((obj: any) => {
            if(obj === value ) {
                obj.inGame = obj.inGame !== true;
            }
        });

        this.arrayAttack.forEach((obj:any) => {
          if(obj.inGame === true ) {
              this.arrayAttackTEMP.push(obj)
          }
        });
    };

    public setComputerObj(value: AttackModel) {
        this.computerObj = value;
    };
    public getComputer(): string {
        return <string>this.computerObj.name;
    };

}