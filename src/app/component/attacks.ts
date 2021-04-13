import {dataAttack} from "../data/data-attack";

export default class Attacks {

    public data = dataAttack;

    constructor() {
    }

    public factoryAttack(attackUser: string, attackComputer: string) {
        let track: number | null = null;
        if (attackUser === attackComputer) {
            return console.log("Match null")
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
        })
    };


    public result(value: number | null) {
        if(value === 1 ) {
            console.log("You lose");
        } else {
            console.log("You win");
        }
    }

}