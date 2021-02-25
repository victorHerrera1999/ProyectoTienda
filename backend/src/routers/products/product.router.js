const router = require('express').Router();
const productController = require('../../controllers/product.controller');


router.post('/addProduct', productController.create);


router.get('/getProduct', productController.read);


router.put('/editProduct/:id', productController.update);

router.delete('/deletProduct/:id', productController.delete);


module.exports = router;