import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
export declare class UsersService {
    private readonly database;
    constructor(database: NodePgDatabase<typeof schema>);
    getUsers(): Promise<{
        id: number;
        email: string | null;
        password: string | null;
        posts: {
            [x: string]: never;
        }[];
    }[]>;
    createUser(user: typeof schema.users.$inferInsert): Promise<import("pg").QueryResult<never>>;
}
