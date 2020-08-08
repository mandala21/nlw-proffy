import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute(data: CreateUserDTO): Promise<User> {
        return await this.repository.save(data)
    }
}