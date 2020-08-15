import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Request, Response } from "express";
import { UserTransformer } from "../../transformers/UserTransformer";
import { BaseController } from "../../utils/BaseController";
import { User } from "../../entities/User";

export class RetriveUserController extends BaseController {
    constructor (
        private userRepository: UserRepository
    ) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        let id = request.params.id
        let user = await this.userRepository.find(id)
        if(user){
            return this.single<User>(response,user,new UserTransformer)
        }
        return this.notFound(response)
    }
}