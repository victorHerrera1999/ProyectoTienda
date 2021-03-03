const rolModel = require('../models/rol.model');

const rolController = {}

rolController.create = (req,res) => {
    req.getConnection((err,conn) => {
        rolModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

rolController.read = (req,res) => {
    req.getConnection((err,conn) => {
        rolModel.get(conn, function(err, rol) {
            if(err) {
                res.json(err);
            }
            res.json({rols : rol});
        });
    });
};

rolController.update = (req,res) => {
    req.getConnection((err,conn) => {
        rolModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

rolController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        rolModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = rolController;