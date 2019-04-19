import { Category } from './Category';

export interface MediumPost{
    author: string;
    categories : Category[];
    content : string;
    description : string;
    enclosure : object;
    guid : string;
    link : string;
    pubDate : string;
    thumbnail : string;
    title : string;
}