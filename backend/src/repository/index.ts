import { userInfo } from "os";
import { User } from "../models";

export class UserRepository {
  static async findOne(id: string) {
    const res = await User.findOne({ _id: id });
    return res;
  }
  static deleteOne(id: string) {
    User.deleteOne({ _id: id });
  }
  static find() {
    return User.find();
  }
  static async create(data: any) {
    const user = new User(data);
    await user.save();
    return user;
  }

  static async updateOne(id: string, data: any) {
    return User.findByIdAndUpdate(id, data);
  }
}
