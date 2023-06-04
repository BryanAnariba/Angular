function classDecorator<T extends { new (...args: any[]): {} }> ( constructor: T ) {
    return class extends constructor {
        newProp = 'Nuevo';
        hello = 'Override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'abc 123';
    print() {
        console.log('SuperClass');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);

