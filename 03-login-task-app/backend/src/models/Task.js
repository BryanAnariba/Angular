const { Schema, model, Types } = require( 'mongoose' );


const taskSchema = new Schema({
    taskName: {
        type: String,
        required: [ true, 'Task Name Is Required' ],
    },
    user: {
        type: Types.ObjectId,
        required: [ true, 'User created task id required']
    },
    taskDescription: {
        type: String,
        required: [ true, 'Task Description Is Required' ]
    }
},{
    timestamps: true,
    versionKey: false
}); 

module.exports = model( 'Task', taskSchema );