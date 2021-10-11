import { Post } from "src/blog/schemas/blog.schema";

export const postStub = (): Post => {
 return {
    id: "8a6e0804-2bd0-4672-b79d-d97027f9071a",
    title: "String",
    description: "String",
    body: "String",
    author: "String",
    date_posted: "String"
  }
}