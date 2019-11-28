
var express=require('express')
var app=express();

var emprouter=require('./routes/employee');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.use("/emp",emprouter);

app.listen(9898,()=>
{
console.log("server stareted 9898");
});

