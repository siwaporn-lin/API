const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
   res.sendFile(__dirname + '/index.html')
} );

app.post("/", (req,res)=>{
   // console.log(req.body);
   // console.log(req.body.num1);
   // console.log(req.body.num2);
   // res.send("Thank you for posting something");

   var num1 = Number(req.body.num1); // อ่านค่าจาก input1
   var num2 = Number(req.body.num2); // อ่านค่าจาก input2
   var result = num1 + num2; // รวมค่า
   res.send("The calculation result is : " + result); // แสดงผล

});


app.get("/bmiCalculator", (req, res)=>{
   //res.send("Hello World");
   res.sendFile(__dirname + "/bmiCalculator.html")
 } );


 app.post("/bmiCalculator", (req,res)=>{
   var weight = Number(req.body.weight); // อ่านค่าจาก input1
   var height = Number(req.body.height); // อ่านค่าจาก input2
   var BMI = weight/ (height^2); // รวมค่า
   res.send("คุณมีค่า BMI = " + BMI);
   console.log(req.body);
 });
 

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});

