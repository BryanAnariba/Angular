console.log( '08-classes'.toUpperCase().trim() );

export class Person {
    public name: string;
    public address: string;

    constructor ( name: string, address: string ) {
        this.name = name;
        this.address = address;
    }
}

/*
export class Hero extends Person {
    constructor ( 
        name: string, 
        address: string, 
        public alterEgo: string, 
        public age: number, 
        public realName: string 
    ) {
        super( name, address );
    }
}
*/
export class Hero {
    public person: Person;
    constructor (
        public alterEgo: string, 
        public age: number, 
        public realName: string, 
        public data: Person
    ) {
        this.person = new Person(data.name, data.address);
    }
}

const persona = new Person('Iron Man', 'Los Angeles');
const ironMan = new Hero( 'Tony Stark', 35, 'Stark', persona );

console.log({ironMan, persona});
