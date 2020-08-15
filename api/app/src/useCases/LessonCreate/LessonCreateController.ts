import { CreateLessonUseCase } from "./CreateLessonUseCase";
import { Request, Response } from "express";
import { CreateLessonDTO } from "./LessonCreateDTO";
import { lessonTransformer } from "../../transformers";

export class CreateLessonController {
    constructor (
        private createLessonUseCase: CreateLessonUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        let data: CreateLessonDTO = request.body
        let lesson = await this.createLessonUseCase.execute(data)
        let returnData = await lessonTransformer.transform(lesson)
        return response
                .status(201)
                .json(returnData)
    }
}