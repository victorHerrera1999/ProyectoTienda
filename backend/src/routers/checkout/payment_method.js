const router = require('express').Router();
const payment_methodController = require('../../controllers/payment_method.controller');


router.post('/addpaymentmethod', payment_methodController.create);


router.get('/getpaymentmethod', payment_methodController.read);


router.put('/editpaymentmethod/:id', payment_methodController.update);

router.delete('/deletpaymentmethod/:id', payment_methodController.delete);


module.exports = router;