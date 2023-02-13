import { ShoeModel, UserModel } from "../models";

export interface ShoeReview {
    user: UserModel
    shoe: ShoeModel
    comment: string
    timestamp: Date
    stars: number
    currentlyUsing: boolean
}