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

    async find(id: any) : Promise<User|null> {
        let rows: Array<User> = await db('users').where({id:id})
        if(!rows.length) return null
        console.log(rows)
        return new User(rows[0])
    }
}
