import { ITransformer } from "./ITransformer";
import { Lesson } from "../entities/Lesson";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/implementations/UserRepository";
import { UserTransformer } from "./UserTransformer";

export class LessonTransformer implements ITransformer {
    async transform(lesson: Lesson) : Promise<object> {
        let user = await lesson.user()
        return {
            id: lesson.id,
            value: lesson.value,
            subject: lesson.subject_id,
            user: this.userTransform(user)
        }
    }

    userTransform(user: User): object {
        let userTransform = new UserTransformer
        return userTransform.transform(user)
    }
}