import {Model} from "./interfaces/model";

export class Comment implements Model {
    readonly content: string
    readonly createdAt: Date

    constructor(input: Partial<Comment>) {
        this.content = input.content || ''
        this.createdAt = input.createdAt || new Date()
    }
}
