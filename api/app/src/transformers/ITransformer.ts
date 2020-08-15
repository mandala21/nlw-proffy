export interface ITransformer<T> {
    transform(entitie: T) : object
}