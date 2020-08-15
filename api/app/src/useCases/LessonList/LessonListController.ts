import { BaseController } from "../../utils/BaseController"
import { Request, Response } from "express";
import { ILessonRepository } from "../../repositories/ILessonRepository";
import { lessonTransformer } from "../../transformers"
import { Lesson } from "../../entities/Lesson";

export class LessonListController extends BaseController {
    constructor (
        private repository: ILessonRepository
    ) {
        super()
    }

    async handle(request: Request, response: Response): Promise<Response> {
        let collection = await this.repository.all()
        return this.collection<Lesson>(response,collection,lessonTransformer)
    }
}