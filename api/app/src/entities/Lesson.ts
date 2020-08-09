export class Lesson {
    public readonly id: number
    public user_id: number
    public value: number
    public subject_id: number

    constructor (data: Lesson){
        this.id = data.id
        this.user_id = data.user_id
        this.value = data.value
        this.subject_id = data.subject_id
    }
}