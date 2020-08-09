import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Request, Response } from "express";
import { UserTransformer } from "../../transformers/UserTransformer";

export class RetriveUserController {
    constructor (
        private userRepository: UserRepository
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        let id = request.params.id
        let user = await this.userRepository.find(id)
        if(user){
            let transformer = new UserTransformer
            return response.json(transformer.transform(user))
        }
        return response
                .status(404)
                .json({message: 'Usuario nao encontrado'})
    }
}