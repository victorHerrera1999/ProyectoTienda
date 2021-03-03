const categoryModel = require('../models/category.model');

const categoryController = {}

categoryController.create = (req,res) => {
    req.getConnection((err,conn) => {
        categoryModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

categoryController.read = (req,res) => {
    req.getConnection((err,conn) => {
        categoryModel.get(conn, function(err, category) {
            if(err) {
                res.json(err);
            }
            res.json({categorys : category});
        });
    });
};

categoryController.update = (req,res) => {
    req.getConnection((err,conn) => {
        categoryModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

categoryController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        categoryModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = categoryController;