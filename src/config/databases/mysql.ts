import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Photo } from "../../photos/entities/photo.entity";
import { User } from "../../users/entities/user.entity";
import { DATABASE_ENUM } from "./enum";

export const mysqlMasterConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: 'mypass',
    database: 'dustin_pro',
    entities: [User, Photo],
    synchronize: true,
    autoLoadEntities: true,
    name: DATABASE_ENUM.MYSQL_MASTER
}

export const mysqlSlave1Config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'mypass',
    database: 'dustin_pro',
    entities: [User, Photo],
    synchronize: true,
    autoLoadEntities: true,
    name: DATABASE_ENUM.MYSQL_SLAVE1
}

export const mysqlSlave2Config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3310,
    username: 'root',
    password: 'mypass',
    database: 'dustin_pro',
    entities: [User, Photo],
    synchronize: true,
    autoLoadEntities: true,
    name: DATABASE_ENUM.MYSQL_SLAVE2
}