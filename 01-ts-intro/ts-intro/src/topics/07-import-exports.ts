import { IProduct, taxCalculation } from "./06-function-desestructuring";

console.log('07-import-exports.ts'.toUpperCase().trim());

const shoppingCart: IProduct[] = [{ description: 'Nokia', price: 99.99 }, { description: 'IPHONE', price: 999.99 }];

const [ total, totalTax ] = taxCalculation({ products: shoppingCart, tax: 0.15 });
console.log(`Total: ${ total }, Tax: ${ totalTax }`);