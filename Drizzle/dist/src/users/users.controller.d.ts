import { UsersService } from './users.service';
import { CreateUserRequest } from './dto/create_user_request';
import { CreateProfileRequest } from './dto/create-profile';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    createUser(request: CreateUserRequest): Promise<import("pg").QueryResult<never>>;
    createProfile(req: CreateProfileRequest): Promise<void>;
}
