const postal_codeModel = require('../models/postal_code.model');

const postal_codeController = {}

postal_codeController.create = (req,res) => {
    req.getConnection((err,conn) => {
        postal_codeModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

postal_codeController.read = (req,res) => {
    req.getConnection((err,conn) => {
        postal_codeModel.get(conn, function(err, postal_code) {
            if(err) {
                res.json(err);
            }
            res.json({postal_codes : postal_code});
        });
    });
};

postal_codeController.update = (req,res) => {
    req.getConnection((err,conn) => {
        postal_codeModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

postal_codeController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        postal_codeModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = postal_codeController;