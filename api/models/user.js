import {Schema,model}from "mongoose";

const Userschema=new Schema ({
    firstname: {type:String},
    lastname: {type:String},
    image: {type:String},
},{
    timestamps:true
})
export const User= model('user',Userschema)