import { ShoeReview, UserModel } from ".";

export interface ShoeCommentReplyModel {
    user: UserModel
    shoeReview: ShoeReview
    comment: string
    timestamp: Date
}