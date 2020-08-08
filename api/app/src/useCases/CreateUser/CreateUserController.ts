import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserDTO } from "./CreateUserDTO";
import { UserTransformer } from "../../transformers/UserTransformer";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        let data: CreateUserDTO = request.body
        let user = await this.createUserUseCase.execute(data)
        let transformer = new UserTransformer
        return response
                .json(transformer.transform(user))
                .status(201)
    }
}