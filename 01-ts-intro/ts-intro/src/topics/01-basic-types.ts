console.log('======01-BASIC-TYPES=======');
const name: string = 'Strider';
let hpPoints: number | 'FULL' = 100;
const isAlive: boolean = true;
hpPoints = 'FULL';

console.log({ name, hpPoints, isAlive })

export {};