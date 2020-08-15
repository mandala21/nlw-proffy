import { BaseController } from "../../utils/BaseController"
import { Request, Response } from "express";
import { ILessonRepository } from "../../repositories/ILessonRepository";
import { lessonTransformer } from "../../transformers"

export class LessonListController extends BaseController {
    constructor (
        private repository: ILessonRepository
    ) {
        super()
    }

    async handle(request: Request, response: Response): Promise<Response> {
        let collection = await this.repository.all()
        let results: Array<object> = []
        for (let i = 0; i < collection.length; i++) {
            let result = await lessonTransformer.transform(collection[i]);
            results.push(result)
        }
        return response.json({
            data: results
        })
    }
}