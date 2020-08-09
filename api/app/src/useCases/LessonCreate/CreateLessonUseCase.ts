import { LessonRepository, CreateLessonData } from "../../repositories/implementations/LessonRepository";
import { CreateLessonDTO } from "./LessonCreateDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Lesson } from "../../entities/Lesson";

export class CreateLessonUseCase {
    constructor(
        private repository: LessonRepository,
        private userRepository: UserRepository
    ){}

    async execute(data: CreateLessonDTO): Promise<Lesson> {
        //pega os dados do usuario
        const userData = data.user
        //cria o usuario
        let user = await this.userRepository.save(userData)
        //monta os dados para cria uma lesson
        let lessonData: CreateLessonData = {
            user_id: user.id,
            subject_id: data.subject_id,
            value: data.value
        }
        //cria a lesson
        let lesson = await this.repository.save(lessonData)
        //retorna a lesson criada
        return lesson
    }
}