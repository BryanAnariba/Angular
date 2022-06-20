const { request, response } = require( 'express' );
const Task = require( '../models/Task' );
const User = require( '../models/User' );

class TaskController {
    saveTask = async ( req = request, res = response ) => {
        const { taskName, taskDescription } = req.body;
        try {
            const user = await User.findById( req._id );
            if ( !user ) throw new Error( `User does not exists, task not saved` );

            const task = new Task({
                taskName: taskName,
                taskDescription: taskDescription,
                user: req._id
            });

            const saved = await task.save()
            return res.status( 201 ).json( { status: 201, data: saved } );

        } catch ( error ) {
            return res.status( 400 ).json( { status: 400, data: error.message } );
        }   
    }
    
    getTask = async ( req = request, res = response ) => {
        const { taskId } = req.params;
        try {
            const user = await User.findById( req._id );
            if ( !user ) throw new Error( `User does not exists, task not show` );

            const task = await Task.find( { user: req._id, _id: taskId  } );
            return res.status( 200 ).json( { status: 200, data: task } );
        } catch ( error ) {
            return res.status( 400 ).json( { status: 400, data: error.message } );
        }
    }

    getTasks = async ( req = request, res = response ) => {
        try {
            const user = await User.findById( req._id );
            if ( !user ) throw new Error( `User does not exists, tasks not show` );

            const tasks = await Task.find( { user: req._id } );
            return res.status( 200 ).json( { status: 200, data: tasks } );

        } catch ( error ) {
            return res.status( 400 ).json( { status: 400, data: error.message } );
        }
    }

    deleteTask = async ( req = request, res = response ) => {
        const { taskId } = req.params;
        try {
            const user = await User.findById( req._id );
            if ( !user ) throw new Error( `User does not exists, tasks not show` );

            const deleted = await Task.findByIdAndDelete( taskId );
            return res.status( 200 ).json( { status: 200, data: deleted } );
        } catch ( error ) {
            return res.status( 400 ).json( { status: 400, data: error.message } );
        }
    }
}   

module.exports = {
    TaskController
}