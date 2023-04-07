import express  from "express";
import { createEmployee, getAllEmployee} from "../controller/employee.js";
const router=express.Router();



//Ekleme
router.post("/createEmployee",createEmployee);
//Getirme
router.get("/getEmployee",getAllEmployee);
export default router;