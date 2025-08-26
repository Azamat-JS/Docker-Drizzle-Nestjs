import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
export declare class CategoriesService {
    private readonly database;
    constructor(database: NodePgDatabase<typeof schema>);
    createCategory(category: typeof schema.categories.$inferInsert): Promise<import("pg").QueryResult<never>>;
    addToPost(postToCategory: typeof schema.postsToCategories.$inferInsert): Promise<import("pg").QueryResult<never>>;
    getCategories(): Promise<{
        id: number;
        name: string;
        postsToCategories: {
            postId: number;
            categoryId: number;
        }[];
    }[]>;
}
