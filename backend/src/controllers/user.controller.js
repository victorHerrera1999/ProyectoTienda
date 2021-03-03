const userModel = require('../models/user.model');

const userController = {}

userController.create = (req,res) => {
    req.getConnection((err,conn) => {
        userModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

userController.read = (req,res) => {
    req.getConnection((err,conn) => {
        userModel.get(conn, function(err, user) {
            if(err) {
                res.json(err);
            }
            res.json({users : user});
        });
    });
};

userController.update = (req,res) => {
    req.getConnection((err,conn) => {
        userModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

userController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        userModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = userController;