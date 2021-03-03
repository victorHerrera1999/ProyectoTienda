const payment_methodModel = require('../models/payment_method.model');

const payment_methodController = {}

payment_methodController.create = (req,res) => {
    req.getConnection((err,conn) => {
        payment_methodModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

payment_methodController.read = (req,res) => {
    req.getConnection((err,conn) => {
        payment_methodModel.get(conn, function(err, payment_method) {
            if(err) {
                res.json(err);
            }
            res.json({payment_methods : payment_method});
        });
    });
};

payment_methodController.update = (req,res) => {
    req.getConnection((err,conn) => {
        payment_methodModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

payment_methodController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        payment_methodModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = payment_methodController;