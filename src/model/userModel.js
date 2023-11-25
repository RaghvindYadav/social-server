import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName :{
        type:String,
        required : 'Enter a first Name'
    },
    lastName :{
        type:String,
    },
    email :{
        type:String,
        required : 'email required'
    },
    hashedAccessToken :{
        type:String,
        required : 'access token required'
    },
    oauthProvider :{
        type:String,
        required : 'Oauth provider required'
    },

})
