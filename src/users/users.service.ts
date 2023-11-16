import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { DATABASE_ENUM } from '../config/databases/enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User, DATABASE_ENUM.MYSQL_MASTER)
    private usersCreateUpdateRepository: Repository<User>,
    @InjectRepository(User, DATABASE_ENUM.MYSQL_SLAVE1)
    private usersGetRepository: Repository<User>,
  ) { }

  create = async (createUserDto: CreateUserDto) => {
    const newUser = await this.usersCreateUpdateRepository.create(createUserDto);
    return await this.usersCreateUpdateRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersGetRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersCreateUpdateRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<void> {
    await this.usersCreateUpdateRepository.delete(id);
  }
}
