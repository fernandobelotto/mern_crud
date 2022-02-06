import { Request, Response } from "express";
import { UserRepository } from "../repository";

export class UserService {
  static async list(req: Request, res: Response) {
    const users = await UserRepository.find();
    return res.json(users);
  }

  static async create(req: Request, res: Response) {
    const data = req.body;
    const user = UserRepository.create(data);
    res.send(user);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UserRepository.deleteOne(id);
    res.send(user);
  }
  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UserRepository.updateOne(id, req.body);
    res.send(user);
  }
  static async find(req: Request, res: Response) {
    const { id } = req.params;
    const user = UserRepository.findOne(id);
    res.send(user);
  }
}
