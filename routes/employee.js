var express=require('express')
var db=require('../db')
var connection=db.connect();
var app=express()
app.get("/",(request,response)=>{
   var textquery='select * from employee';

   connection.query(textquery,(err,result)=>
   {  

       if(err==null)
       {
       response.send(JSON.stringify(result));
       }
       else{
           response.send(JSON.stringify(err));
       }
   });
});

app.post("/",(request,response)=>{
    var {name,address,email}=request.body;
    var textquery=`insert into employee(name,address,email) values('${name}','${address}','${email}')`;
 
    connection.query(textquery,(err,result)=>
    {  
 
        if(err==null)
        {
        response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err));
        }
    });
 });

 app.put("/:id",(request,response)=>{
    var textquery=`update employee set name='${request.body.name}',address='${request.body.address}', email='${request.body.email}' where id=${request.params.id}`; 
    connection.query(textquery,(err,result)=>
    {  
 
        if(err==null)
        {
        response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err));
        }
    });
 });

 app.delete("/:id",(request,response)=>{
     var id=request.params.id;
    var textquery=`delete from employee where id=${id}`;
 
    connection.query(textquery,(err,result)=>
    {  
 
        if(err==null)
        {
        response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err));
        }
    });
 });

module.exports=app