import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DATABASE_ENUM } from '../config/databases/enum';

@Module({
  imports: [TypeOrmModule.forFeature([User], DATABASE_ENUM.MYSQL_MASTER), TypeOrmModule.forFeature([User], DATABASE_ENUM.MYSQL_SLAVE1)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UsersModule { }
