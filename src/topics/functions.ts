function addNumber(a: number, b: number): number{
    return a + b;
}

let result: number = addNumber(5,6)
console.log({result});

let arrowFunction = (a: number, b: number): string => {
return (a + b).toString();
}
let arrowFunction2 = (c: number, d: number): string => {
return `${c - d}`;
}

let result2: string = arrowFunction2(4, 3)
console.log({result2});

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base
}

const multiplyResult: number = multiply(5)
console.log({multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHp: ()=> void;
}

const healCharacter = (character: Character, amount: number) =>{
 character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

strider.showHp();

healCharacter(strider, 10);
strider.showHp();

export {}