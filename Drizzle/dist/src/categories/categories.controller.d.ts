import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(request: {
        name: string;
    }): Promise<import("pg").QueryResult<never>>;
    getCategories(): Promise<{
        id: number;
        name: string;
        postsToCategories: {
            postId: number;
            categoryId: number;
        }[];
    }[]>;
    addToPost(request: {
        postId: number;
        categoryId: number;
    }): Promise<import("pg").QueryResult<never>>;
}
