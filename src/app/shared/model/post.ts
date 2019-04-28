import { reaction } from './reaction';

export class Post {
    id? : string
    title : string
    author : string
    content : string
    description: string
    thumbnail : string
    published : string
    reactions: reaction[]
    categories : []
    feed : object
    
}
