import { CreateLessonUseCase } from "./CreateLessonUseCase";
import { LessonRepository } from "../../repositories/implementations/LessonRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateLessonController } from "./LessonCreateController";

const lessonRepository = new LessonRepository
const userRepository = new UserRepository
const createLessonUseCase = new CreateLessonUseCase(
    lessonRepository,
    userRepository
)
const createLessonController = new CreateLessonController(
    createLessonUseCase
)

export {
    createLessonUseCase,
    createLessonController
}