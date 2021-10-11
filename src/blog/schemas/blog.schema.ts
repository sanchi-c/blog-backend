import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String,
});

export type PostDocument = Post & Document;

@Schema()
export class Post {
    id: string;
    title: string;
    description: string;
    body: string;
    author: string;
    date_posted: string;
}

//export const BlogSchema = SchemaFactory.createForClass(Post);
