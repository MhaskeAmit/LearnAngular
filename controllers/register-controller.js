var express = require('express');
var connection = require('./../config');

module.exports.register= function(req,res){

    var users = {

        "username":req.body.name,
        "password":req.body.password,
        "cpassword": req.body.cpassword

    }
    connection.query('insert into registration SET ?',users,function(error,res,fields){

        if(error){
            res.json({
                status: false,
                message:'There are some error with query'
            })
        }else{
            res.json({
                status:true,
                data:res,
                message:'User registered successfully'
            })
        }

    });
}