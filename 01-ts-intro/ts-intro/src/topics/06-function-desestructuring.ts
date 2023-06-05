console.log('=======06-function-desestructuring.ts======'.toUpperCase());

export interface IProduct {
    description: string;
    price: number;
}

interface ITaxCalculationOption {
    tax: number;
    products: IProduct[]
}

export const taxCalculation = ( options: ITaxCalculationOption): [ number, number ] => {
    let total: number = 0;
    const { products, tax } = options;

    products.forEach(({price}: IProduct) => {
        total += price;
    });
    return [ total, total * tax ];
}

const phone: IProduct = {
    description: 'XIAOMI MI 11 LITE',
    price: 399.99
}

const phoneTwo: IProduct = {
    description: 'POCO X4 PRO',
    price: 399.99
}

const shoppingCart: IProduct[] = [ phone, phoneTwo ];
const tax = 0.15;

const [ total, totalTax ] = taxCalculation({ tax: tax, products: shoppingCart });
console.log(`Total: ${ total }, Tax: ${ totalTax }`);
