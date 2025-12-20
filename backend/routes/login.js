import { Router } from "express";
import { userLogin } from "../controllers/login.js";

const login = Router();
login.post('/', userLogin)

export{login}