import { Model, Schema } from "mongoose";
import { Id } from "../../../shared/domain/types";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserDocument } from "./UserModel";

export class UserMongooseRepository implements UserRepository {
  constructor(private model: Model<UserDocument>) {}
  
  async create(user: User): Promise<User> {
    return this.model.create(user);
  }
  
  async updateOne(user: User): Promise<User> {
    const options = {
      new: true,
    };
    return this.model.findOneAndUpdate({ email: user.email }, user, options);
  }
  
  async deleteOne(_id: Id): Promise<void> {
    this.model.deleteOne({ _id, })
  }
}
