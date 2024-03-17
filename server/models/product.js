let mongoose=require("mongoose")

let productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    descriptions:{
        type:String
    },
    image:{
        type:String
    },

})
let product=mongoose.model("product",productSchema)
module.exports=product