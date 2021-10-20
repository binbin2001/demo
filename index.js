const express = require("express")
const app = express()
app.set("view engine", "hbs")
app.set("views","./views")
app.use(express.static("public"))
//mongoose
const MongoClient = require('mongodb')
mongodb.connect('mongodb+srv://thanhbinh2001:123456789abc@cluster0.spshl.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log("mongo connected error :" + err)
    }else{
        console.log("mongo connected successfull.")
    }
})



app.get("/", function(req,res){
    res.render("home")
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Bin_Shop is activity!!!!')