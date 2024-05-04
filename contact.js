const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/port")
.then(()=>{
    console.log("Connection successful with the database");
}).catch((err)=>{
    console.log(`No connection found ${err}`);
})
const contact= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type: String, 
        required: true ,  
        trim:true
    },
    subject:{
        type: String, 
        required: true ,  
        trim:true
    },
    message:{
        type: String, 
        required: true ,  
        trim:true
    }
})
const Clientcon1 = mongoose.model("contact",contact);
module.exports = Clientcon1;