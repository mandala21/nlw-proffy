import { ITransformer } from "./ITransformer";
import { LessonSchedule } from "../entities/LessonSchedule";

export class LessonScheduleTransform implements ITransformer<LessonSchedule> {
    transform(entitie: LessonSchedule) : object {
        return {
            day_week: entitie.day_week,
            to: entitie.to,
            from: entitie.from
        }
    } 
}