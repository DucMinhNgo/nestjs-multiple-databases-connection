import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Column()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    lastName: string;

    @IsBoolean()
    @IsNotEmpty()
    @Column()
    isActive: boolean;
}
