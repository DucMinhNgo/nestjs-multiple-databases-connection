import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { mysqlMasterConfig, mysqlSlave1Config, mysqlSlave2Config } from './config/databases/mysql';
import { ThrottlerModule } from '@nestjs/throttler';
import { mongoMasterConfig } from './config/databases/mongo';
import { Post } from './posts/post.entity';
import { DATABASE_ENUM } from './config/databases/enum';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    // ThrottlerModule.forRoot(),
    // TypeOrmModule.forRoot(mysqlMasterConfig),
    // TypeOrmModule.forRoot(mysqlSlave1Config),
    // TypeOrmModule.forRoot(mysqlSlave2Config),
    TypeOrmModule.forRoot(mongoMasterConfig),
    TypeOrmModule.forFeature([Post], DATABASE_ENUM.MONGO_MASTER),
    // UsersModule,
    // PhotosModule,
  ],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule { }
