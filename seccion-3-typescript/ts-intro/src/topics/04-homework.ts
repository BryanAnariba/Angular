console.log('======04-HOMEWORK=======');

interface IAddress {
    street: string;
    country: string;
    city: string;
}

interface ISuperHero {
    name: string;
    age: number;
    address: IAddress;
    showAddress: () => string;
}

const superHero: ISuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Queens',
        country: 'USA',
        city: 'NY'
    },
    showAddress () {
        return `Hero: ${ this.name }, ${ this.age }, ${ this.address }`
    }
}

const address = superHero.showAddress();

console.log({ address });
