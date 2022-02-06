import express from "express";
import { UserService } from "../services";

export const UserRouter = express.Router();

UserRouter.get("/", UserService.list);
UserRouter.post("/", UserService.create);
UserRouter.delete("/:id", UserService.delete);
UserRouter.put("/:id", UserService.update);
UserRouter.get("/:id", UserService.find);
