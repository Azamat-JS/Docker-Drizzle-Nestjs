import { Inject, Injectable } from '@nestjs/common';
import { DATABASE_CONNECTION } from '../database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema'
import { eq } from 'drizzle-orm';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class PostsService {
  constructor(
    @Inject(DATABASE_CONNECTION) 
    private readonly database: NodePgDatabase<typeof schema>,
    private readonly categoriesService: CategoriesService
  ) { }

 async create(post: typeof schema.posts.$inferInsert, category?: string) {
    await this.database.transaction(async (tx) => {
      const posts = await tx
        .insert(schema.posts)
        .values(post)
        .returning({ id: schema.posts.id });
      if (category) {
        const { id } = await this.categoriesService.createCategory(
          {
            name: category,
          },
          tx,
        );
        await this.categoriesService.addToPost(
          {
            postId: posts[0].id,
            categoryId: id,
          },
          tx,
        );
      }
    });
  };

  async findAll() {
    return this.database.query.posts.findMany({
      with: { user: true, postsToCategories: true }
    })
  }

  async getPost(postId: number) {
    return this.database.query.posts.findFirst({
      where: eq(schema.posts.id, postId)
    })
  }

  async updatePost(postId: number, post: typeof schema.posts.$inferInsert) {
    return this.database.update(schema.posts).set(post).where(eq(schema.posts.id, postId)).returning()
  }
}
