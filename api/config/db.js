import mongoose from "mongoose";
const Db= "mongodb://127.0.0.1/Galeria"

export function conectdb(){
    mongoose.connect(Db).then(()=> console.log("db is conect")).catch(error=>console.error("Error connecting",error))
}