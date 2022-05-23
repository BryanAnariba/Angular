import { connect } from 'mongoose';

class DataBase {
    async startConnection () {
        try {
            await connect( `${ process.env.MONGO_ATLAS } ` );
            console.log( `MongoDB started`.cyan );
        } catch ( err ) {
            console.log( `Error: ${ err }`.red );
        }
    }
}

export {
    DataBase,
}