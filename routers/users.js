import express from "express";
import { createUser, getUserById } from "../controllers/userController.js";

const users = express.Router();

users.post('/', createUser);
users.get('/:id', getUserById);

export default users;
