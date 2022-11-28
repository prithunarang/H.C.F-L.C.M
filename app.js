const express = require("express");
const BodyParser = require("body-parser");
const app = express();
app.use(BodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res){
    var num1 = req.body.n1input;
    var num2 = req.body.n2input;


   var smalernum = Math.min(num1, num2);


   var largernum = Math.max(num1, num2);

if(largernum % smalernum === 0){
    var hcf = smalernum;
} else {
    var minus = smalernum
    while (minus>0){
        minus--;
        if ((largernum % minus == 0) && (smalernum % minus == 0)){
            var hcf = minus;
            break;
        }
    }
}

            res.write("<h1>the hcf is " + hcf + "<br> thanks for visiting narang-plaza!!")



res.send();
});

app.get("/lcm", function(req, res){
    res.sendFile(__dirname + "/lcm.html");

});


app.post("/lcm", function(req, res){
    var num1 = req.body.n1input;
    var num2 = req.body.n2input;


   var smalernum = Math.min(num1, num2);


   var largernum = Math.max(num1, num2);

if(largernum % smalernum === 0){
    var hcf = smalernum;
} else {
    var minus = smalernum
    while (minus>0){
        minus--;
        if ((largernum % minus == 0) && (smalernum % minus == 0)){
            var hcf = minus;
            break;
        }
    }
}

var lcm = num2*num1/hcf
res.write("<h1>the lcm is " + lcm + "<br> thanks for visiting narang-plaza!!")

res.send();

});





app.listen(process.env.PORT || 4500, function(){
    console.log("the server is running on port 4500");
}) 