import { CreateLessonUseCase } from "./CreateLessonUseCase";
import { Request, Response } from "express";
import { CreateLessonDTO } from "./LessonCreateDTO";
import { LessonTransformer } from "../../transformers/LessonTransformer";

export class CreateLessonController {
    constructor (
        private createLessonUseCase: CreateLessonUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        let data: CreateLessonDTO = request.body
        let lesson = await this.createLessonUseCase.execute(data)
        let tranformer = new LessonTransformer
        let returnData = await tranformer.transform(lesson)
        return response
                .status(201)
                .json(returnData)
    }
}