import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DATABASE_ENUM } from "./enum";

export const mongoSlave1Config = "mongodb://localhost:27022/dustin_pro";
export const mongoSlave2Config = "mongodb://localhost:27023/dustin_pro";

export const mongoMasterConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    name: DATABASE_ENUM.MONGO_MASTER,
    url: 'mongodb://localhost:27021',
    database: 'dustin_pro',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    ssl: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
