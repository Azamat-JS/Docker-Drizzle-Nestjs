import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): import("drizzle-orm/pg-core").PgInsertBase<import("drizzle-orm/pg-core").PgTableWithColumns<{
        name: "post";
        schema: undefined;
        columns: {
            id: import("drizzle-orm/pg-core").PgColumn<{
                name: "id";
                tableName: "post";
                dataType: "number";
                columnType: "PgSerial";
                data: number;
                driverParam: number;
                notNull: true;
                hasDefault: true;
                isPrimaryKey: true;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: undefined;
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            content: import("drizzle-orm/pg-core").PgColumn<{
                name: "content";
                tableName: "post";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            published: import("drizzle-orm/pg-core").PgColumn<{
                name: "published";
                tableName: "post";
                dataType: "boolean";
                columnType: "PgBoolean";
                data: boolean;
                driverParam: boolean;
                notNull: false;
                hasDefault: true;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: undefined;
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            timestamp: import("drizzle-orm/pg-core").PgColumn<{
                name: "timestamp";
                tableName: "post";
                dataType: "date";
                columnType: "PgTimestamp";
                data: Date;
                driverParam: string;
                notNull: false;
                hasDefault: true;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: undefined;
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            userId: import("drizzle-orm/pg-core").PgColumn<{
                name: "user_id";
                tableName: "post";
                dataType: "number";
                columnType: "PgInteger";
                data: number;
                driverParam: string | number;
                notNull: false;
                hasDefault: false;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: undefined;
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
        };
        dialect: "pg";
    }>, import("drizzle-orm/node-postgres").NodePgQueryResultHKT, undefined, undefined, false, never>;
    findAll(): Promise<{
        id: number;
        content: string | null;
        published: boolean | null;
        timestamp: Date | null;
        userId: number | null;
        user: {
            [x: string]: never;
        } | null;
        postsToCategories: {
            [x: string]: never;
        }[];
    }[]>;
    getPost(postId: string): Promise<{
        id: number;
        content: string | null;
        published: boolean | null;
        timestamp: Date | null;
        userId: number | null;
    } | undefined>;
}
