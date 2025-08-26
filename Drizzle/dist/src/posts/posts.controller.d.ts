import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(request: CreatePostDto): Promise<void>;
    updatePost(postId: string, request: {
        content: string;
    }): Promise<{
        id: number;
        content: string | null;
        published: boolean | null;
        timestamp: Date | null;
        userId: number | null;
    }[]>;
    findAll(): Promise<{
        id: number;
        content: string | null;
        published: boolean | null;
        timestamp: Date | null;
        userId: number | null;
        postsToCategories: {
            [x: string]: never;
        }[];
        user: {
            [x: string]: never;
        } | null;
    }[]>;
    getPost(postId: string): Promise<{
        id: number;
        content: string | null;
        published: boolean | null;
        timestamp: Date | null;
        userId: number | null;
    } | undefined>;
}
