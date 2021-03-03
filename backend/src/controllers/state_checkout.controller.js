const state_checkoutModel = require('../models/state_checkout.model');

const state_checkoutController = {}

state_checkoutController.create = (req,res) => {
    req.getConnection((err,conn) => {
        state_checkoutModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

state_checkoutController.read = (req,res) => {
    req.getConnection((err,conn) => {
        state_checkoutModel.get(conn, function(err, state_checkout) {
            if(err) {
                res.json(err);
            }
            res.json({state_checkouts : state_checkout});
        });
    });
};

state_checkoutController.update = (req,res) => {
    req.getConnection((err,conn) => {
        state_checkoutModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

state_checkoutController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        state_checkoutModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = state_checkoutController;