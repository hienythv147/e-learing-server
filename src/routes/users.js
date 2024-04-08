import express from "express";
import { createUser } from "../controllers/users.js";

const router = express.Router();

router.post("/new_user", createUser);

export default router;
