var express = require("express") 
var app = express()
var port = process.env.port || 3000;
 
app.use(express.json());

//Route to handle the addition of two numbers
app.get("/addTwoNumbers", (req, res) => {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);

    //validation for non number inputs
    if(isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ message: "Invalid input" });} 
    else {
        const sum = num1 + num2;
        //return json response
        res.json({ data: sum, message: "Success", statusCode: 200 });}
});
 app.listen(port,()=>{
 console.log("App listening to: "+port)
})
