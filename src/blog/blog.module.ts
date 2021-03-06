import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { AuthenticationMiddleware } from 'src/common/authentication.middleware';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])
  ],
  providers: [BlogService],
  controllers: [BlogController]
})
//For Authentication using OAuth
// export class BlogModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
//     consumer.apply(AuthenticationMiddleware).forRoutes(
//       { method: RequestMethod.POST, path: '/blog/post' },
//       { method: RequestMethod.PUT, path: '/blog/edit' },
//       { method: RequestMethod.DELETE, path: '/blog/delete' }
//     )
//   }
// }

export class BlogModule {}