console.log('======02-OBJECTS-INTERFACES=======');
// INTERFAZ DE PERSONAJES
interface ICharacter { 
    name: string;
    hp: number;
    skills: string[],
    hometown?: string; // -> ? valor opcional
}

const deadPool: ICharacter = {
    name: 'Wade Wison',
    hp: 100,
    skills: [ 'Inmortal', 'Stronger' ],
    hometown: 'New York'
}

console.table( deadPool );

export {};