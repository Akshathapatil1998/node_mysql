'use strict';
var express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost', 
    user:'root',
    password:' your password',
    database:'Your db name',
    port:3307 // not manditory
});
con.connect(function(err) {
 if(err) {
     console.log('Error');
 } else {
     console.log("Connected");
 }
 });

 con.query('select 1+6',function(err,results,fields){
    if (err) throw err;
console.log(results[0]);
});

