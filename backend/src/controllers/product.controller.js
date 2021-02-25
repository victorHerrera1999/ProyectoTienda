const productModel = require('../models/product.model');

const productController = {}

productController.create = (req,res) => {
    req.getConnection((err,conn) => {
        productModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

productController.read = (req,res) => {
    req.getConnection((err,conn) => {
        productModel.get(conn, function(err, product) {
            if(err) {
                res.json(err);
            }
            res.json({products : product});
        });
    });
};

productController.update = (req,res) => {
    req.getConnection((err,conn) => {
        productModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

productController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        productModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = productController;