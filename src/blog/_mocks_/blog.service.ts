import { postStub } from "../test/stubs/post.stub";

export const BlogService = jest.fn().mockReturnValueOnce({  
  //getPost: jest.fn().mockResolvedValue(postStub()),
  //getPosts: jest.fn().mockReturnValue([postStub()]),
  addPost: jest.fn().mockResolvedValue(postStub()),
  editPost: jest.fn().mockResolvedValue(postStub()),
})