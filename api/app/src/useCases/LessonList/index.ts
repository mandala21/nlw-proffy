import { LessonListController } from "./LessonListController";
import { LessonRepository } from "../../repositories/implementations/LessonRepository";

const lessonRepository = new LessonRepository

export const lessonListController = new LessonListController(
    lessonRepository
)