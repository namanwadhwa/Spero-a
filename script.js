var express=require('express');
var mysql=require('mysql');
var app=express()
var connection =mysql.createPool({
  connectionLimit: 50,
  host:'localhost',
  user:'root',
  password:'',
  database:'mydb'
});
//connection.connect(function(error){
  //if(!!error) {
    //console.log('Error');
  //} else {
    //console.log('Connected');
  //}
//});

app.get('/', function(req, resp) { 
  connection.getConnection(function(error, tempCont){      //query("SELECT * FROM mySampleTable", function(error, rows, fields){
      if(!!error) {
        tempCont.release();
        console.log('Error in the query');
      } else {
        console.log('Connected!');
        tempCont.query("SELECT * FROM table1", function(error, rows, fields){  //console.log(rows[0].Name);
          tempCont.release(); 
          if(!!error) {
            console.log('Error in the query'); 
          } else {
            resp.json(rows); 
            //resp.send('HELLO,'+rows[0].Name);      
          }
        })
    }
  });
})
app.listen(1336);
