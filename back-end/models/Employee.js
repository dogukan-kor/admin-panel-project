import mongoose from 'mongoose';
const { Schema } = mongoose;

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    surname:{
        type:String,
        required:true,
    },
    e_posta:{
        type:String,
        required:true,
        uniqe:true
    },
    number:{
        type:Number,
        required:true,
        uniqe:true
    },
    successful_piece:{
        type:Number,
        required:true
    },
    fire_piece:{
        type:Number,
      },
    status:{
        type:String,  
      },
    
},{timestamps:true}
)

export default mongoose.model("Employee",EmployeeSchema);