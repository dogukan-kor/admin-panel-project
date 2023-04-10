import express  from "express";
import { createEmployee, getAllEmployee, getFirePiece} from "../controller/employee.js";
const router=express.Router();



//Ekleme
router.post("/createEmployee",createEmployee);
//Getirme
router.get("/getEmployee",getAllEmployee);
//Fire Getirme
router.get("/getFirePiece",getFirePiece); 

export default router;