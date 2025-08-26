import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DATABASE_CONNECTION } from 'src/database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema'
import { eq } from 'drizzle-orm';

@Injectable()
export class PostsService {
  constructor(@Inject(DATABASE_CONNECTION) private readonly database: NodePgDatabase<typeof schema>) { }

  create(post: typeof schema.posts.$inferInsert) {
    return this.database.insert(schema.posts).values(post)
  }

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
