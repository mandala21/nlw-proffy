import { CreateSubjectUseCase } from "./CreateSubjectUseCase";
import { Request, Response } from "express";
import { CreateSubjectDTO } from "./CreateSubjectDTO";
import { Subject } from "../../entities/Subject";
import { SubjectTransformer } from "../../transformers/SubjectTransformer";

export class CreateSubjectController {
    constructor (
        private createSubjectUseCase: CreateSubjectUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        let data: CreateSubjectDTO = request.body
        let subject = await this.createSubjectUseCase.execute(data)
        let transformer = new SubjectTransformer
        let returns = transformer.transform(subject)
        return response.json(transformer.transform(subject))    
    }
}