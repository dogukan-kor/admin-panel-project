import Employee from "../models/Employee.js";

export const createEmployee=async (req,res,next)=>{
    console.log("create e girdi");
    const newEmployee=new Employee(req.body);
    console.log("çalıştı latife gündüz <3")
    try{
        const savedEmployee=await newEmployee.save();
        res.status(200).json(savedEmployee);
    }catch(err){
        next(err);
    }
}


export const getAllEmployee=async (req,res,next)=>{
    console.log("Get All çalıştı")
    try{
        const employees=await Employee.find();  
        console.log(employees);     
        res.status(200).json(employees);
    }catch(err){
        next(err);
    } 
}

export const getFirePiece=async (req,res,next)=>{
    console.log("Get fire piece çalıştı")
    try{
        const totalFirePiece=await Employee.aggregate([
            {
                $group:{
                    _id:"fire_piece",
                    total:{$sum:"$fire_piece"}
                }
            }
        ]);  
        console.log(totalFirePiece[0].total); 
        res.status(200).json(totalFirePiece);
    }catch(err){
        next(err);
    } 
}
