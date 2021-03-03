const router = require('express').Router();
const postal_codeController = require('../../controllers/postal_code.controller');
const countryController = require('../../controllers/country.controller');
const departmentController = require('../../controllers/departament.controller');
const cityController = require('../../controllers/city.controller');
const localizationController = require('../../controllers/localization.controller');



//postal_code
router.post('/addpostal_code', postal_codeController.create);


router.get('/getpostal_code', postal_codeController.read);


router.put('/editpostal_code/:id', postal_codeController.update);

router.delete('/deletpostal_code/:id', postal_codeController.delete);

//country
router.post('/addcountry', countryController.create);


router.get('/getcountry', countryController.read);


router.put('/editcountry/:id', countryController.update);

router.delete('/deletcountry/:id', countryController.delete);

//department
router.post('/adddepartment', departmentController.create);


router.get('/getdepartment', departmentController.read);


router.put('/editdepartment/:id', departmentController.update);

router.delete('/deletdepartment/:id', departmentController.delete);

//city
router.post('/addcity', cityController.create);


router.get('/getcity', cityController.read);


router.put('/editcity/:id', cityController.update);

router.delete('/deletcity/:id', cityController.delete);

//localization
router.post('/addlocalization', localizationController.create);


router.get('/getlocalization', localizationController.read);


router.put('/editlocalization/:id', localizationController.update);

router.delete('/deletlocalization/:id', localizationController.delete);


module.exports = router;