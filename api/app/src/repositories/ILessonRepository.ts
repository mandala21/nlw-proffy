import { CreateLessonDTO } from "../useCases/LessonCreate/LessonCreateDTO";
import { Lesson } from "../entities/Lesson";
import { CreateLessonData } from "./implementations/LessonRepository";

export interface ILessonRepository {
    save(data: CreateLessonData): Promise<Lesson>
}