var mysql = require('mysql');

const connection = mysql.createConnection({
    user:'root',
    password:process.env.MYSQL_PW,
    database:'Join_Us'
});
connection.connect();

connection.query('select 1+1 as solution',function(error,results,fields){
    if (error) throw error;
console.log('The Solution is',results[0].solution);
});

