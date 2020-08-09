import { Subject } from "../entities/Subject";
import { CreateSubjectDTO } from "../useCases/CreateSubject/CreateSubjectDTO";

export interface ISubjectRepository {
    save(data: CreateSubjectDTO): Promise<Subject>
}