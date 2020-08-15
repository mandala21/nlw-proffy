import { CreateLessonDTO, LessonScheduleDTO } from "../useCases/LessonCreate/LessonCreateDTO";
import { Lesson } from "../entities/Lesson";
import { CreateLessonData } from "./implementations/LessonRepository";
import { LessonSchedule } from "../entities/LessonSchedule";

export interface ILessonRepository {
    save(data: CreateLessonData): Promise<Lesson>

    saveScheduleLesson(data: LessonScheduleDTO[],lesson: Lesson) : Promise<Lesson>

    findLessonShcedules(lesson: Lesson): Promise<LessonSchedule[] | null> 
}