import mongoose from 'mongoose';

export const connectDB=async()=>{
    try{
   await mongoose.connect('mongodb://localhost:27017/merndb')
    console.log(">>>DB conectada")
    } catch (error){
        console.log(Error);
    }
};