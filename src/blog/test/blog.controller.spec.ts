import { MongooseModule } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import { BlogController } from "../blog.controller";
//import { BlogService } from "../_mocks_/blog.service";
import { BlogService } from "../blog.service";
import { CreatePostDTO } from "../dto/create-post.dto";
import { BlogSchema, Post } from "../schemas/blog.schema";
import { postStub } from "./stubs/post.stub";
//import { closeInMongodConnection, rootMongooseTestModule } from "./support/mongo.util";
import { createRequest, createResponse } from "node-mocks-http"

jest.mock('../blog.service');

describe('PostController', () => {
  let blogController: BlogController;
  let blogService: BlogService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        //rootMongooseTestModule(),
        //MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }]),
      ],
      controllers: [BlogController],
      providers: [BlogService]
    }).compile();

    blogController = moduleRef.get<BlogController>(BlogController);
    blogService = moduleRef.get<BlogService>(BlogService);

    jest.clearAllMocks();

    //jest.spyOn(blogService, "getPosts").mockReturnValueOnce(Promise.resolve([postStub()]));
    blogService.getPosts = jest.fn().mockReturnValueOnce([postStub()]);
    blogService.getPost = jest.fn().mockReturnValueOnce(postStub());
  })

  it('then it should return posts', async () => {
    const req = createRequest()
    req.res = createResponse()
    const res = createResponse()
    let posts = await blogController.getPosts(req.res);
    console.log(posts._getData());

    expect(JSON.parse(posts._getData())).toEqual([postStub()])
  })

  it('then it should return post', async () => {
    const req = createRequest()
    req.res = createResponse()
    const res = createResponse()
    let post = await blogController.getPost(req.res, postStub().id);
    console.log(post._getData());

    expect(JSON.parse(post._getData())).toEqual(postStub())
  })

  // describe('getPost', () => {
  //   describe('when getPost is called', () => {
  //     let post: any;

  //     beforeEach(async () => {
  //       blogService.getPost = jest.fn().mockReturnValueOnce(postStub());
  //       //jest.spyOn(blogService, "getPost").mockResolvedValueOnce(Promise.resolve(postStub()));
  //       post = await blogController.getPost(req.res, postStub().id)
  //     })

  //     // test('then it should call blogService', () => {
  //     //   expect(blogService.getPost).toBeCalledWith(postStub().id);
  //     // })

  //     test('then is should return a post', () => {
  //       console.log(post._getData());
  //       expect(JSON.parse(post._getData())).toEqual(postStub());
  //     })
  //   })
  // })

  // describe('getPosts', () => {
  //   describe('when getPosts is called', () => {
  //     //let postsResponse: any;
  //     let posts: any;
  //     // req.res.status(200);
  //     //req.res = {data:posts};

  //     beforeEach(async () => {
  //       debugger;
  //       jest.resetAllMocks();
  //       //blogService.getPosts = jest.fn().mockReturnValueOnce([postStub()]);      
  //       jest.spyOn(blogService, "getPosts").mockReturnValueOnce(Promise.resolve([postStub()]));

  //       posts = await blogController.getPosts(req.res);
  //       //postsResponse = await blogController.getPosts(req.res);

  //     })

  //     // test('then it should call blogService', async () => {        
  //     //   expect(blogService.getPosts).toHaveBeenCalled();
  //     // })

  //     test('then it should return posts', async () => {
  //       debugger;


  //       posts = await blogController.getPosts(req.res);
  //       // const { property } = JSON.parse(res._getData());
  //       console.log(posts._getData());

  //       // expect(property).toBe('someValue');
  //       expect(JSON.parse(posts._getData())).toEqual([postStub()])
  //       //expect(postsResponse.statusCode).toEqual(200);
  //     })
  //   })
  // })

  // describe('getPosts', () => {
  //   describe('when getPosts is called', () => {
  //     let postsResponse: any;
  //     let posts: Post[];
  //     // req.res.status(200);
  //     // req.res.json(posts);

  //     beforeEach(async () => {
  //       // posts = await blogController.getPosts(req.res);
  //       postsResponse = await blogController.getPosts(req.res);
  //     })

  //     test('then it should call blogService', () => {
  //       expect(blogService.getPosts).toHaveBeenCalled();
  //     })

  //     test('then it should return posts', () => {
  //       debugger;
  //       console.log(postsResponse);
  //       //expect(posts).toEqual([postStub()])
  //       expect(postsResponse.statusCode).toEqual(200);
  //     })
  //   })
  // })

  // describe('createPost', () => {
  //   describe('when createPost is called', () => {
  //     let post: Post;
  //     let createPostDto: CreatePostDTO

  //     beforeEach(async () => {
  //       createPostDto = {
  //         title: postStub().title,
  //         description: postStub().title,
  //         body: postStub().title,
  //         author: postStub().title,
  //         date_posted: postStub().title
  //       }
  //       post = await blogController.addPost(null,createPostDto);
  //     })

  //     test('then it should call blogService', () => {
  //       expect(blogService.addPost).toHaveBeenCalledWith(createPostDto.title, createPostDto.author);
  //     })

  //     test('then it should return a post', () => {
  //       expect(post).toEqual(postStub())
  //     })
  //   })
  // })

  // describe('updatePost', () => {
  //   describe('when updatePost is called', () => {
  //     let post: Post;
  //     let updatePostDto: CreatePostDTO;

  //     beforeEach(async () => {
  //       updatePostDto = {
  //         title: postStub().title,
  //         description: postStub().title,
  //         body: postStub().title,
  //         author: postStub().title,
  //         date_posted: postStub().title
  //       }
  //       post = await blogController.editPost(null, postStub().id, updatePostDto);
  //     })

  //     test('then it should call blogService', () => {
  //       expect(blogService.editPost).toHaveBeenCalledWith(postStub().id, updatePostDto);
  //     })

  //     test('then it should return a post', () => {
  //       expect(post).toEqual(postStub())
  //     })
  //   })
  // })

  // afterAll(async () => {
  //   await closeInMongodConnection();
  // });
})