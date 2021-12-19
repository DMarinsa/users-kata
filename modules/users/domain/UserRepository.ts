import { Id } from "../../shared/domain/types";
import { User } from "./User";

export interface UserRepository {
  create(user: User): Promise<User>;
  updateOne(user: User): Promise<User>;
  deleteOne(id: Id): Promise<void>;
}
