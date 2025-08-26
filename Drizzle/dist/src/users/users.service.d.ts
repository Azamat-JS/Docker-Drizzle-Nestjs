import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
export declare class UsersService {
    private readonly database;
    constructor(database: NodePgDatabase<typeof schema>);
    getUsers(): Promise<{
        id: number;
        email: string | null;
        password: string | null;
        profile: {
            id: number;
            userId: number | null;
            age: number | null;
            bio: string | null;
        } | null;
        posts: {
            [x: string]: never;
        }[];
    }[]>;
    createUser(user: typeof schema.users.$inferInsert): Promise<import("pg").QueryResult<never>>;
    createProfile(profile: typeof schema.profile.$inferInsert): Promise<void>;
}
