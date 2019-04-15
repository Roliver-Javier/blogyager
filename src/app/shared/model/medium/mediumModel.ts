import { Feed } from './feed';
import { MediumPost } from './mediumPost';
export interface MediumModel{
    feed : Feed,
    items : MediumPost[];
    status : string;
}