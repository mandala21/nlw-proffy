import { ILessonRepository } from "../ILessonRepository";
import { LessonScheduleDTO, CreateLessonDTO } from "../../useCases/LessonCreate/LessonCreateDTO";
import { Lesson } from "../../entities/Lesson";
import db from "../../database/connection";

export interface CreateLessonData {
    user_id: number,
    subject_id: number,
    value: number,
}

export class LessonRepository implements ILessonRepository {
    async save(data: CreateLessonData): Promise<Lesson>{
        let returns: Array<number> = await db('lessons').insert(data)
        const id = returns[0]
        return new Lesson({
            id: id,
            user_id: data.user_id,
            subject_id: data.subject_id,
            value: data.value
        })
    }
}