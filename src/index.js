// dotenv for environment variables
import dotenv from "dotenv";
// database connection
import connectDB from "./db/index.js"
import { app } from './app.js'

// dotenv configuration export karte hai dotenv file ko
dotenv.config({
    path:'./env'
});
connectDB()
.try(() =>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!!  " , err);
    
})




















/*
import express from "express"

const app =  express()


(async() => {
    try{
        //DATABASE CONNECTION
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME} `)
    // listners 
    app.on("error",(error)=>{
        console.log("Error", error)
        throw error
    })
    //app listening 
    app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
    })

    }
    catch{
        console.error("Error ", error)
        throw err
    }
})()*/


