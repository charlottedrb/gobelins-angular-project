import {Model} from "./interfaces/model";

export class Image implements Model{
    readonly path: string
    readonly description: string
    likes: number
    readonly width: number
    readonly height: number

    constructor(input: Partial<Image>) {
        this.path = input.path || ''
        this.description = input.description || ''
        this.likes = input.likes || 0
        this.width = input.width || 0
        this.height = input.height || 0
    }
}

