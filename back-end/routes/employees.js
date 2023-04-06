import express  from "express";
import { createEmployee} from "../controller/employee.js";
const router=express.Router();



//Ekleme
router.post("/createEmployee",createEmployee);

export default router;