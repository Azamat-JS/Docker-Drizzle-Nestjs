import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
export declare class CategoriesService {
    private readonly database;
    constructor(database: NodePgDatabase<typeof schema>);
    createCategory(category: typeof schema.categories.$inferInsert): Promise<void>;
    addToPost(postToCategory: typeof schema.postsToCategories.$inferInsert): Promise<void>;
    getCategories(): Promise<{
        id: number;
        name: string;
        postsToCategories: {
            postId: number;
            categoryId: number;
        }[];
    }[]>;
}
