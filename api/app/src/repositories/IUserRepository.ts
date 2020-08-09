import { User } from "../entities/User";
import { CreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";

export interface IUserRepository {
    save(data: CreateUserDTO): Promise<User>
}