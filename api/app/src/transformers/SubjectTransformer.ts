import { ITransformer } from "./ITransformer";
import { Subject } from "../entities/Subject";

export class SubjectTransformer implements ITransformer {
    transform(subject: Subject): object {
        return {
            id: subject.id,
            name: subject.name,
            created_at: subject.created_at,
            update_at: subject.updated_at
        }
    }
}