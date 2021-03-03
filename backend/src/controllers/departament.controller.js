const departmentModel = require('../models/departament.model');

const departmentController = {}

departmentController.create = (req,res) => {
    req.getConnection((err,conn) => {
        departmentModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

departmentController.read = (req,res) => {
    req.getConnection((err,conn) => {
        departmentModel.get(conn, function(err, department) {
            if(err) {
                res.json(err);
            }
            res.json({departments : department});
        });
    });
};

departmentController.update = (req,res) => {
    req.getConnection((err,conn) => {
        departmentModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

departmentController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        departmentModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = departmentController;