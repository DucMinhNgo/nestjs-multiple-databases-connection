import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/entities/photo.entity';
import { mysqlMasterConfig, mysqlSlave1Config, mysqlSlave2Config } from './config/databases/mysql';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot(),
    TypeOrmModule.forRoot(mysqlMasterConfig),
    TypeOrmModule.forRoot(mysqlSlave1Config),
    TypeOrmModule.forRoot(mysqlSlave2Config),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>('mongodb://192.168.1.1:27021'),
    //     dbName: configService.get<string>('DUSTIN'),
    //   }),
    //   inject: [ConfigService],
    // }),
    MongooseModule.forRoot('mongodb://localhost:27022/DB'),
    UsersModule,
    PhotosModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
