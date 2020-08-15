import { ILessonRepository } from "../ILessonRepository";
import { LessonScheduleDTO, CreateLessonDTO } from "../../useCases/LessonCreate/LessonCreateDTO";
import { Lesson } from "../../entities/Lesson";
import db from "../../database/connection";
import { LessonSchedule } from "../../entities/LessonSchedule";

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

    async saveScheduleLesson(data: LessonScheduleDTO[], lesson: Lesson) : Promise<Lesson> {
        let dataWithLesson = data.map(el => ({...el, lesson_id: lesson.id}))
        await db('lesson_schedules').insert(dataWithLesson)
        return lesson
    }

    async findLessonShcedules(lesson: Lesson) : Promise<LessonSchedule[] | null> {
        let rows: LessonSchedule[] = await db('lesson_schedules').where({lesson_id: lesson.id})
        if(!rows.length) return null
        return rows
    }

    async all(): Promise<Lesson[]> {
        let rows:Array<Lesson> = await db('lessons').select('*')
        return rows
    }
}