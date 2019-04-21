import { reaction } from './reaction';

export class Post {
    id? : string
    title : string
    author : string
    content : string
    description: string
    image : string
    published : string
    reactions: reaction[]
}
