console.log('11-optional-chaining.ts'.toUpperCase().trim());

export interface Passenger {
    name: string;
    childrens?: string[];
}

const passegerOne: Passenger = {
    name: 'Bryan'
}

const passegerTwo: Passenger = {
    name: 'Ariel',
    childrens: ['Erick', 'Maria']
}

const printChildrensPassenger = ( passenger: Passenger ): number => {
    const howManyChildren = passenger.childrens?.length || 0;
    console.log({ passengerName: passenger.name, howManyChildren });
    return howManyChildren;
}

printChildrensPassenger(passegerTwo);
printChildrensPassenger(passegerOne);