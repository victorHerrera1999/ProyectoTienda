const cityModel = require('../models/city.model');

const cityController = {}

cityController.create = (req,res) => {
    req.getConnection((err,conn) => {
        cityModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

cityController.read = (req,res) => {
    req.getConnection((err,conn) => {
        cityModel.get(conn, function(err, city) {
            if(err) {
                res.json(err);
            }
            res.json({citys : city});
        });
    });
};

cityController.update = (req,res) => {
    req.getConnection((err,conn) => {
        cityModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

cityController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        cityModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = cityController;