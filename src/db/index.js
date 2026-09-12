// import mongoose from "mongoose";
// // database connection name import
// import { DB_NAME } from "../constants.js";

// // BD Is another continent that is used to connect to the database. It is a function that connects to the database and returns a promise. If the connection is successful, it logs the host name of the database. If there is an error, it logs the error and exits the process with a status code of 1.
// const connectDB = l () => {
//     try{
//     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     console.log(`MongoDB Connected !! Host: ${connectionInstance.connection.host}`)
//     }
//     catch (error){
//         console.log("MONGODB Connection Error" , error)
//         // process is a method in node js
//         process.exit(1)
//     }
// }

// export default connectDB

import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
const connectDB = ()=> {
    
try{
    mongoose.connect(`${process.env.MONGODB_URL}`)
}
catch (error){
    console.log("Mongodb connection error",error);
    process.exit('1')
}
}

export default connectDB;