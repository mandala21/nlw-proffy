import { LessonTransformer } from "./LessonTransformer";
import { UserRepository } from "../repositories/implementations/UserRepository";
import { LessonRepository } from "../repositories/implementations/LessonRepository";

const userRepository = new UserRepository
const lessonRepository = new LessonRepository

export const lessonTransformer = new LessonTransformer(
    userRepository,
    lessonRepository
)
