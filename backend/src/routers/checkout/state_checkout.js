const router = require('express').Router();
const state_checkoutController = require('../../controllers/state_checkout.controller');


router.post('/addstatecheckout', state_checkoutController.create);


router.get('/getstatecheckout', state_checkoutController.read);


router.put('/editstatecheckout/:id', state_checkoutController.update);

router.delete('/deletstatecheckout/:id', state_checkoutController.delete);


module.exports = router;