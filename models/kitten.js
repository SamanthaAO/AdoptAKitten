var orm = require("../config/orm.js");

var kitten = {
    selectAll: function(callback){
        orm.selectAll("kittens", function(res){
            callback(res);
        })
    },
    insertOne: function(columns, values, callback){
        orm.insertOne("kittens", columns, values, function(res){
            callback(res);
        })
    },
    updateOne: function(columnValues, condition, callback){
        orm.updateOne("kittens", columnValues, condition, function(res){
            callback(res);
        })
    }

};

module.exports = kitten;