import { User } from "../entities/User";
import { CreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";

export interface IUserRepository {
    /**
     * salva um usuario na base de dados
     */
    save(data: CreateUserDTO): Promise<User>
}