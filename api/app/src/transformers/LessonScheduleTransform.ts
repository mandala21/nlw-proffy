import { ITransformer } from "./ITransformer";
import { LessonSchedule } from "../entities/LessonSchedule";

export class LessonScheduleTransform implements ITransformer {
    transform(schedule: LessonSchedule): object {
        return {
            day_week: schedule.day_week,
            to: schedule.to,
            from: schedule.from
        }
    }
}