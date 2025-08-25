import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DATABASE_CONNECTION } from 'src/database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema'

@Injectable()
export class PostsService {
  constructor(@Inject(DATABASE_CONNECTION) private readonly database: NodePgDatabase<typeof schema>) { }
  create(post: typeof schema.posts.$inferInsert) {
    return this.database.insert(schema.posts).values(post)
  }

  async findAll() {
    return this.database.query.posts.findMany({
      with: { user: true }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
