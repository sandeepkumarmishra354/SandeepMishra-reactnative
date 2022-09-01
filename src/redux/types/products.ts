export interface IProduct {
    _id: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    avatar: string,
    description: string,
    price: number,
    category: string,
    developerEmail: string,
}

export interface IProductDetail extends IProduct {
    // full detail can have other fields also along with basic details.
}

export interface IProductCreate extends Omit<IProduct, "_id" | "createdAt" | "updatedAt"> {
    // can be added other fields also in future
}

export type ProductState = {
    products: IProduct[],
    product: IProductDetail | null,
    fetchingList: boolean,
    fetchingDetail: boolean,
    creating: boolean
}