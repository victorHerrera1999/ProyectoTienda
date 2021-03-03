const router = require('express').Router();
const categoryController = require('../../controllers/category.controller');


router.post('/addCategory', categoryController.create);


router.get('/getCategory', categoryController.read);


router.put('/editCategory/:id', categoryController.update);

router.delete('/deletCategory/:id', categoryController.delete);


module.exports = router;