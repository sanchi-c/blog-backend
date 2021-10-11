import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPost } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';
//import { Post } from './schemas/blog.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<IPost>) { }

  async addPost(createPostDTO: CreatePostDTO): Promise<IPost> {
    //const newPost = await this.postModel.create(createPostDTO);
    debugger;
    const newPost = await this.postModel.create({
      id: uuidv4(),
      title: createPostDTO.title,
      description: createPostDTO.description,
      body: createPostDTO.body,
      author: createPostDTO.author,
      date_posted: createPostDTO.date_posted
    });
    return newPost;
  }

  async getPost(postID): Promise<IPost> {
    const post = await this.postModel
      .findById(postID)
      .exec();
    return post;
  }

  async getPosts(): Promise<IPost[]> {
    const posts = await this.postModel.find();
    return posts;
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<IPost> {
    const editedPost = await this.postModel
      .findByIdAndUpdate(postID, createPostDTO, { new: true });
    return editedPost;
  }
  async deletePost(postID): Promise<IPost> {
    const deletedPost = await this.postModel
      .findByIdAndRemove(postID);
    return deletedPost;
  }
}