let express = require('express');
let userController = require('../controllers/userController');

module.exports = () => {
    let router = express.Router();

    router.get('/', userController.getAll);
    router.get('/username/:us', userController.getByUsername);
    router.get('/:us', userController.getOne);
    router.post('/', userController.addUser);
    router.put('/', userController.updateUser);
    router.delete('/:us', userController.deleteUser);

    return router;
}