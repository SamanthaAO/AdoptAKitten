var express = require("express");

var router = express.Router();

var kitten = require("../models/kitten.js");

router.get("/", function(req,res){
    kitten.selectAll(function(data){
        var hbsObject = {
            kittens: data
        }
        res.render("index", hbsObject)
    });
});

router.post("/api/kittens", function(req, res){
    kitten.insertOne("name",req.body.name, function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/kittens/:id", function(req, res){
    var condition = "id = " + req.params.id;

    kitten.updateOne({adopted: req.body.adopted}, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          } 
    });

});



module.exports = router;