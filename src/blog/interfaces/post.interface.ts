import { Document } from 'mongoose';

export interface IPost extends Document {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string;
}