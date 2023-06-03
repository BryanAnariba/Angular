console.log('======03-FUNCTIONS=======');

interface ICharacter {
    name: string;
    hp: number;
    showHp: () => void;
}

function addNumbers (a: number, b: number): number {
    return a + b;
}

const addNumbersArrowFunction = (a: number , b: number): number => {
    return a + b;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

const healthCharacter = ( character: ICharacter, amount: number ) => {
    character.hp += amount;
}

const result: number = addNumbers( 1,2 );
const resultArrowFunction: number = addNumbersArrowFunction(5, 5);
const multiplyResult: number = multiply(5);

console.log({ result });
console.log({ resultArrowFunction })
console.log({ multiplyResult });

const deadPool: ICharacter = {
    name: 'Wade Wison',
    hp: 55,
    showHp() {
        console.log(`Health Points: ${ this.hp }`);
    },
}
healthCharacter( deadPool, 25 );
console.log(deadPool);


export {};