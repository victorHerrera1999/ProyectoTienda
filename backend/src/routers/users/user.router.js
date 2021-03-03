const router = require('express').Router();
const userController = require('../../controllers/user.controller');
const rolController = require('../../controllers/rol.controller');

//usuario
router.post('/addUser', userController.create);


router.get('/getUser', userController.read);


router.put('/editUser/:id', userController.update);

router.delete('/deletUser/:id', userController.delete);

//rol
router.post('/addrol', rolController.create);


router.get('/getrol', rolController.read);


router.put('/editrol/:id', rolController.update);

router.delete('/deletrol/:id', rolController.delete);

module.exports = router;