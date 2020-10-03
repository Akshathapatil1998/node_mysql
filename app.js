var mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql',
    database:'testing',
    port:'3306'
});
connection.connect(()=>{
    console.log("Connected to database")
});


connection.query('select 1+1 as solution',function(error,results,fields){
    if (error) throw error;
console.log('The Solution is',results[0].solution);
});

