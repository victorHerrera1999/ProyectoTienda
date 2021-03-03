const router = require('express').Router();
const contactController = require('../../controllers/contact.controller');




//contact user
router.post('/addcontact', contactController.create);


router.get('/getcontact', contactController.read);

router.put('/editcontact/:id', contactController.update);

router.delete('/deletcontact/:id', contactController.delete);

module.exports = router;