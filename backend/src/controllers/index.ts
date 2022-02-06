import express from "express";
import { UserService } from "../services";

export const UserRouter = express.Router();

UserRouter.get("/", UserService.list);
UserRouter.get("/:id", UserService.find);
UserRouter.post("/", UserService.create);
UserRouter.put("/:id", UserService.update);
UserRouter.delete("/:id", UserService.delete);
