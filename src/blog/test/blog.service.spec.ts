import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from '../blog.service';
import { IPost } from '../interfaces/post.interface';

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogService],
    }).compile();

    service = module.get<BlogService>(BlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of posts', async () => {
    const result = null;//new Post(){};
    jest.spyOn(service, 'getPosts').mockImplementation(() => result);

    expect(await service.getPosts()).toBe(result);
  });
});
