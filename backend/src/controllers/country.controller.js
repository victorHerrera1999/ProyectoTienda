const countryModel = require('../models/country.model');

const countryController = {}

countryController.create = (req,res) => {
    req.getConnection((err,conn) => {
        countryModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

countryController.read = (req,res) => {
    req.getConnection((err,conn) => {
        countryModel.get(conn, function(err, country) {
            if(err) {
                res.json(err);
            }
            res.json({countrys : country});
        });
    });
};

countryController.update = (req,res) => {
    req.getConnection((err,conn) => {
        countryModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

countryController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        countryModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = countryController;