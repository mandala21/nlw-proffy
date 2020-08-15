import { User } from "../entities/User";
import { ITransformer } from "./ITransformer";

export class UserTransformer implements ITransformer<User> {
    transform(user: User): object {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            bio: user.bio
        }
    }
}