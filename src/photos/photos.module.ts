import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { DATABASE_ENUM } from '../config/databases/enum';

@Module({
  imports: [TypeOrmModule.forFeature([Photo], DATABASE_ENUM.MYSQL_MASTER)],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule { }
