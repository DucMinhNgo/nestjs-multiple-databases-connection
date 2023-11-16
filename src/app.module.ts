import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/entities/photo.entity';
import { mysqlMasterConfig, mysqlSlave1Config, mysqlSlave2Config } from './config/databases/mysql';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(mysqlMasterConfig),
    TypeOrmModule.forRoot(mysqlSlave1Config),
    TypeOrmModule.forRoot(mysqlSlave2Config),
    UsersModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
