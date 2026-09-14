import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

connectDB()
    // .then(() => {
    //     app.listen(process.env.PORT || 8000, () => {
    //         console.log(
    //             `server is running at port ${process.env.PORT || 8000}`
    //         );
    //     });
    // })
    // .catch((err) => {
    //     console.log("MONGODB connection failed !!!", err);
    // });

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT || 8000}`);
        
    })
}).catch((err)=>{
    console.log('mongoDB connection failed !!! ' , err);
    
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





import express from "express"

const app= express()

app.get("/",(req,res)=>{
    res.send("<h1>Hell0 baby</h1>")

})

app.listen(8000,()=>{
    console.log('this is port on is 8000');
    
})