import { CreateUserDTO } from "../CreateUser/CreateUserDTO";

export interface LessonScheduleDTO {
    day_week: number,
    from: number,
    to: number,
}

export interface CreateLessonDTO {
    user: CreateUserDTO,
    subject_id: number,
    value: number,
    lesson_schedules: Array<LessonScheduleDTO>,
}