import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch(':id')
  async updatePost(@Param('id') postId: string, @Body() request: {content:string}){
    return this.postsService.updatePost(parseInt(postId), request)
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async getPost(@Param('id') postId: string){
    return this.postsService.getPost(parseInt(postId))
  }
}
