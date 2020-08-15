import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Request, Response } from "express";
import { UserTransformer } from "../../transformers/UserTransformer";
import { BaseController } from "../../utils/BaseController";

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
            let transformer = new UserTransformer
            return response.json(transformer.transform(user))
        }
        return this.notFound(response)
    }
}