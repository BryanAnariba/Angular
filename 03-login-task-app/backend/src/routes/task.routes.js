const { Router } = require( 'express' );
const { TaskController } = require('../controllers/TaskController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = Router();
const taskController = new TaskController();

router.post( 
    '',
    verifyToken,
    taskController.saveTask 
);

router.get( 
    '', 
    verifyToken,
    taskController.getTasks
);

router.get( 
    '/:taskId', 
    verifyToken,
    taskController.getTask
);

router.delete( 
    '/:taskId', 
    verifyToken,
    taskController.deleteTask
);

module.exports = {
    TaskRoutes: router,
}