# node_mysql 
connection between nodejs and mysql database

Step 1:Install mysql database

check if server is installed properly else reconfigure the sql server

Step 2:Install Nodejs

Step 3:Install required pacakages like npm install mysql 

Step 4:Creat Java Script file in your project file and open that file

Step 5:copy code from app.js and run

#FIXING ERRORS

1.sqlmessage: "access denied for user 'root'@'localhost' (using password: yes)

For this error reconfigure your mysql server and add port number
Also change password and grant privileges using below code in mysql workbench
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new_password';
flush privileges;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;



