import { ITransformer } from "./ITransformer";
import { Lesson } from "../entities/Lesson";

export class LessonTransformer implements ITransformer {
    transform(lesson: Lesson) : object {
        return {
            id: lesson.id,
            value: lesson.value,
            subject: lesson.subject_id
        }
    }
}