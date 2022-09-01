export interface ICategory {
    _id: string,
    createdAt: string,
    updatedAt: string,
    name: string,
}

export type CategoryState = {
    categories: ICategory[],
    fetching: boolean
}