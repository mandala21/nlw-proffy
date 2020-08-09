import { ISubjectRepository } from "../ISubjectRepository";
import { CreateSubjectDTO } from "../../useCases/CreateSubject/CreateSubjectDTO";
import { Subject } from "../../entities/Subject";
import db from "../../database/connection";

export class SubjectRepository implements ISubjectRepository {
    async save(data: CreateSubjectDTO) : Promise<Subject> {
        let returns: Array<number> = await db('subjects').insert(data,'*')
        return new Subject({
            id: returns[0],
            name: data.name
        })
    }
}