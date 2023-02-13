export interface UserModel {
    firstName: string
    lastName: string
    username: string
    profileImage?: string
    bio?: string
    email: string
    password: string
    isActive: boolean
    createdAt: Date
    lastAction: Date
    updatedAt: Date
}