export class User {
    public readonly id: number
    public email: string
    public name: string
    public bio: string
    public phone: string
    public avatar: string

    public constructor(data: User){
        this.id = data.id
        this.email = data.email
        this.name = data.name
        this.bio = data.bio
        this.phone = data.phone
        this.avatar = data.avatar
    }
}