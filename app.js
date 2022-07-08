const express = require("express");
const mongoose=require("mongoose");
const app=express()
mongoose.connect("mongodb://localhost/todo", {
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successfully connected")
    }
})
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(require("./routes/index.js"))
app.use(require("./routes/todo"))

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})
