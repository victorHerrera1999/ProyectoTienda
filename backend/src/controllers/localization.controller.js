const localizationModel = require('../models/localization.model');

const localizationController = {}

localizationController.create = (req,res) => {
    req.getConnection((err,conn) => {
        localizationModel.create(conn, req.body ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg : "successfully created"});
        });
    });
};

localizationController.read = (req,res) => {
    req.getConnection((err,conn) => {
        localizationModel.get(conn, function(err, localization) {
            if(err) {
                res.json(err);
            }
            res.json({localizations : localization});
        });
    });
};

localizationController.update = (req,res) => {
    req.getConnection((err,conn) => {
        localizationModel.update(conn ,req.body ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully edited"});
        });
    });
};

localizationController.delete = (req,res) => {
    req.getConnection((err,conn) => {
        localizationModel.delete(conn ,req.params.id ,function(err, msg) {
            if(err) {
                res.json(err);
            }
            res.json({msg: "successfully removed"});
        });
    });
};

module.exports = localizationController;