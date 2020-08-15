import { ITransformer } from "./ITransformer";
import { Lesson } from "../entities/Lesson";
import { User } from "../entities/User";
import { UserTransformer } from "./UserTransformer";
import { IUserRepository } from "../repositories/IUserRepository";
import { ILessonRepository } from "../repositories/ILessonRepository";
import { LessonSchedule } from "../entities/LessonSchedule";
import { LessonScheduleTransform } from "./LessonScheduleTransform";

export class LessonTransformer implements ITransformer<Lesson> {

    constructor (
        private userRepository: IUserRepository,
        private lessonRepository: ILessonRepository,
    ) {}

    async transform(lesson: Lesson) : Promise<object> {
        let user = await this.userRepository.find(lesson.user_id)
        let schedules = await this.lessonRepository.findLessonShcedules(lesson)
        return {
            id: lesson.id,
            value: lesson.value,
            subject: lesson.subject_id,
            user: user ?? null,
            schedules: schedules?.length ? this.scheduleTransform(schedules) : null,
        }
    }

    userTransform(user: User): object {
        let userTransform = new UserTransformer
        return userTransform.transform(user)
    }

    scheduleTransform(schedules: LessonSchedule[]) : Array<object> {
        let transformer = new LessonScheduleTransform
        let results = schedules.map((el) => (transformer.transform(el)))
        return results
    }
}