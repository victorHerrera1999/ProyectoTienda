const checkoutModel = require('../models/checkout.model');

const checkoutController = {}

checkoutController.create = (req,res) => {
    req.getConnection((err,conn) => {
        checkoutModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

checkoutController.read = (req,res) => {
    req.getConnection((err,conn) => {
        checkoutModel.get(conn, function(err, checkout) {
            if(err) {
                res.json(err);
            }
            res.json({checkouts : checkout});
        });
    });
};

checkoutController.update = (req,res) => {
    req.getConnection((err,conn) => {
        checkoutModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

checkoutController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        checkoutModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = checkoutController;