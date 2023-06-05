console.log('09.generics.ts'.toUpperCase().trim());

export function whatIsMyType<T>( argument: T ): T {
    return argument;
}


// CON LOS GENERICOS NO INFIERE EL DATO PERO DEBEMOS HACER USO DEL <tipo>
const amIString = whatIsMyType<string>('Hola Mundo');
const amINumber = whatIsMyType<number>(100);
const amIArray = whatIsMyType<number[]>([1,2,3]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed(2));
console.log(amIArray.join( '-' ));


