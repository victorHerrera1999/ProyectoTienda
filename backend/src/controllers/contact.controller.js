const contactModel = require('../models/contact.model');

const contactController = {}

contactController.create = (req,res) => {
    req.getConnection((err,conn) => {
        contactModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

contactController.read = (req,res) => {
    req.getConnection((err,conn) => {
        contactModel.get(conn, function(err, contact) {
            if(err) {
                res.json(err);
            }
            res.json({contacts : contact});
        });
    });
};

contactController.update = (req,res) => {
    req.getConnection((err,conn) => {
        contactModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

contactController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        contactModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = contactController;