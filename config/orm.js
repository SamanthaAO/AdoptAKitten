
var connection = require("../config/connection.js");

//creates question marks for values 
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }




function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


var orm = {
    selectAll: function(table, callback){
        var queryString = `SELECT * FROM ${table} order by likes desc;`
        connection.query(queryString, function(err, res){
            if(err){
                throw err;
            }
            callback(res)
        })
    },
    insertOne: function(table, columns, values, callback){
        var queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)});`
        connection.query(queryString, values, function(err, result) {
            if (err) {
              throw err;
            }
      
            callback(result);
          }); 
    },
    updateOne: function(table, columnValues, condition, callback){
        var queryString = `UPDATE ${table} SET ${objToSql(columnValues)} WHERE ${condition}`
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
      
            callback(result);
          }); 

    }
}

module.exports = orm;