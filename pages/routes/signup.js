exports.signup = function(req,res){

    var user = {
        "username" : req.body.username,
        "password":req.body.passowrd,
        "cpassword":req.body.cpassword
    }

    RTCPeerConnection.query('insert into registration SET ?',users,function(error,res,fields){
        if(error){
            console.log("Error occurred",error);
            res.send({
                "code":200,
                "success":"User registered successfully"

            });
        }

    });
}