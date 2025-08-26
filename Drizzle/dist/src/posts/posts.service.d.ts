import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { CategoriesService } from '../categories/categories.service';
export declare class PostsService {
    private readonly database;
    private readonly categoriesService;
    constructor(database: NodePgDatabase<typeof schema>, categoriesService: CategoriesService);
    create(post: typeof schema.posts.$inferInsert, category?: string): Promise<void>;
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
    getPost(postId: number): Promise<{
        id: number;
        content: string | null;
        published: boolean | null;
        timestamp: Date | null;
        userId: number | null;
    } | undefined>;
    updatePost(postId: number, post: typeof schema.posts.$inferInsert): Promise<{
        id: number;
        content: string | null;
        published: boolean | null;
        timestamp: Date | null;
        userId: number | null;
    }[]>;
}
