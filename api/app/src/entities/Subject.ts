export class Subject {
    public readonly id: number
    public name: string
    public created_at?: string
    public updated_at?: string | null

    constructor (data: Subject){
        this.id = data.id
        this.name = data.name
        this.created_at = data.created_at
        this.updated_at = data.updated_at
    }
} 