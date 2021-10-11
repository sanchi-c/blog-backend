import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    
    // MongooseModule.forRoot(`${process.env.MONGO_CONNECTION_URI}`, { useNewUrlParser: true }),
    // // MongooseModule.forRoot('mongodb://localhost:27017/nest-blog-project', { useNewUrlParser: true }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BlogModule,
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
