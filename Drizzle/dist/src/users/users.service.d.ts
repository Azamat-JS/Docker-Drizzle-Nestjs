import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
export declare class UsersService {
    private readonly database;
    constructor(database: NodePgDatabase<typeof schema>);
    getUsers(): Promise<{
        password: string | null;
        id: number;
        email: string | null;
        posts: {
            [x: string]: never;
        }[];
        profile: {
            id: number;
            userId: number | null;
            age: number | null;
            bio: string | null;
        } | null;
    }[]>;
    createUser(user: typeof schema.users.$inferInsert): Promise<import("pg").QueryResult<never>>;
    createProfile(profile: typeof schema.profile.$inferInsert): Promise<void>;
}
