var connection = require('./../config');
module.exports.login = function(req,res){
    var username = req.body.username;
    var password = req.body.password;


    connection.query('select * from registration where username = ? and password = ?',[username],[password], function(error,res,fields){

        if(error){
            res.json({
                status : false,
                message : 'There are some errors in query'
            })
        }
        else{
            res.json({
                status:false,
                message : 'Successfully authenticated'
            })
        }
    })

    
}