const router = require('express').Router();
const checkoutController = require('../../controllers/checkout.controller');


router.post('/addcheckout', checkoutController.create);


router.get('/getcheckout', checkoutController.read);


router.put('/editcheckout/:id', checkoutController.update);

router.delete('/deletcheckout/:id', checkoutController.delete);


module.exports = router;