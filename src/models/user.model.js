import mongoose, { Schema } from "mongoose";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




const userSchema =  new Schema({  
userName:{
    type:String.apply,
    require:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true,
     
},
email:{
    type:String,
    require:true,
    unique:true,
    lowercase:true,
    trim:true,
     
},
fullName:{
    type:String,
    require:true,
    trim:true,
    index:true
     
},
avatar:{
    type:String, // cloudnary url
    require:true,
     
},
coverImage:{
    type:String,
     
},
watchHistory:[
    {
        type: Schema.Types.ObjectId,
        ref:"Video"
    }
],
password:{
    type:String,
    require:[true,'password is required']
},
refreshToken:{
    type:'true'
}
},{timestamps:true})  

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next(); 
this.password = bcrypt.hash(this.password,10)
next()
})

userSchema.methods.isPasswordCorrect= async function(password) {
    return await  bcrypt.compare(password,this.password)
}


userSchema.methods.generatAccessToken = async function (params) {
 return   jwt.sign({
        _id: this._id,
        email:this.email,
        userName:this.userName,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACEESS_TOKEN_EXPRIRY
    }
)

}
userSchema.methods.generatRefreshToken = async function (params) {
    return   jwt.sign({
        _id: this._id,
       
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPRIRY
    }
)
}


export const UserSchema = mongoose.model("UserName", userSchema)