import { Post } from "src/blog/schemas/blog.schema";
import { postStub } from "../stubs/post.stub";
import { MockModel } from "./mock.model";

export class PostModel extends MockModel<Post> {
    protected entityStub = postStub()
  }