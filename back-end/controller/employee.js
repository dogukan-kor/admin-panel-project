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


