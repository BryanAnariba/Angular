const mongoose = require('mongoose');

//Crear la conexion a la DB

const dbCONN = async() => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(`${process.env.db_CONN}`);
        console.log('>>> Se conecto a la base de datos');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    dbCONN
}