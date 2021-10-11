import { HttpStatus } from "@nestjs/common";
import { Test } from "@nestjs/testing"
import { Connection } from "mongoose"
import { CreatePostDTO } from "../../dto/create-post.dto";
import * as request from 'supertest';

import { AppModule } from "../../../app.module"
import { postStub } from "../stubs/post.stub";

import { DatabaseService } from "../../../database/database.service";

describe('BlogController', () => {
    let dbConnection: Connection;
    let httpServer: any;
    let app: any;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
        dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle();
        httpServer = app.getHttpServer();
    })

    afterAll(async () => {
        await app.close();
    })

      beforeEach(async () => {
        await dbConnection.collection('posts').deleteMany({});
      })
   

    it('getPosts - should return an array of posts', async () => {
        debugger;
        await dbConnection.collection('posts').insertOne(postStub())
        const response = await request(httpServer).get('/blog/posts');
        console.log("Response - " + response.body);
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject([postStub()]);
    })


    it('addPost - should create a post', async () => {
        debugger;
        const createPostRequest: CreatePostDTO = {
            title: postStub().title,
            description: postStub().description,
            body: postStub().body,
            author: postStub().author,
            date_posted: postStub().date_posted
        }
        const response = await request(httpServer).post('/blog/post').send(createPostRequest)
        debugger;
        expect(response.status).toBe(HttpStatus.OK);
        expect(response.body.post).toMatchObject(createPostRequest);

        const post = await dbConnection.collection('posts').findOne({ title: createPostRequest.title });
        expect(post).toMatchObject(createPostRequest);
    })
})