export class LessonSchedule {
    public readonly id: number; 
    public readonly day_week: number; 
    public readonly from: number; 
    public readonly to: number; 
    public readonly lesson_id: number; 

    constructor (data: LessonSchedule) {
        this.id = data.id
        this.day_week = data.day_week
        this.from = data.from
        this.to = data.to
        this.lesson_id = data.lesson_id
    }
}