import { CreateSubjectDTO } from "./CreateSubjectDTO";
import { Subject } from "../../entities/Subject";
import { SubjectRepository } from "../../repositories/implementations/SubjectRepository";

export class CreateSubjectUseCase {
    constructor(
        private repository: SubjectRepository
    ){}
    async execute(data: CreateSubjectDTO): Promise<Subject> {
        return await this.repository.save(data)
    }
}