import { User } from "../models";

export class UserRepository {
  static async findOne(id: string) {
    const user = await User.findOne({ _id: id });
    return user;
  }

  static async deleteOne(id: string) {
    const user = await User.deleteOne({ _id: id });
    return user;
  }

  static async find() {
    const users = await User.find({});
    return users;
  }

  static async create(data: any) {
    const user = new User(data);
    await user.save();
    return user;
  }
}
