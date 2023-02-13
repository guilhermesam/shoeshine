import { BrandModel } from "./brand"

export interface ShoeModel {
    brand: BrandModel
    name: string
    images: string[]
    release: Date
}