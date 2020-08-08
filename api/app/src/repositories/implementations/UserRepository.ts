import { IUserRepository } from "../IUserRepository";
import { CreateUserDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { User } from "../../entities/User";
import db from "../../database/connection";

export class UserRepository implements IUserRepository {
    async save(data: CreateUserDTO): Promise<User> {
        let returns: Array<number> = await db('users').insert(data,'id')
        data.id = returns[0]
        return new User({
            id: data.id,
            name: data.name,
            email: data.email,
            avatar: data.avatar,
            bio: data.bio,
            phone: data.phone
        })
    }
}
