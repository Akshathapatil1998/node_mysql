var mysql = require('mysql');

const connection = mysql.createConnection({
    user:'root',
    password:"",// your database password
    database:'' //databse name that you want to commit
});
connection.connect();

connection.query('select 1+1 as solution',function(error,results,fields){
    if (error) throw error;
console.log('The Solution is',results);
});

