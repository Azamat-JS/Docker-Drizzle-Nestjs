import { UsersService } from './users.service';
import { CreateUserRequest } from './dto/create_user_request';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
        id: number;
        email: string | null;
        password: string | null;
        posts: {
            [x: string]: never;
        }[];
    }[]>;
    createUser(request: CreateUserRequest): Promise<import("pg").QueryResult<never>>;
}
