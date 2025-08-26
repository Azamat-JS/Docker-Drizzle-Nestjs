import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(request: {
        name: string;
    }): Promise<void>;
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
    }): Promise<void>;
}
