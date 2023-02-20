import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { UserService } from './user.service';
import { IUserEntity } from './entities/user.entity';
import { UserDto } from './services/dto/userInput.dto';
import { PartialUserDto } from './services/dto/partialUserInput.dto';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getAllUser(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }

  @Post()
  async createUser(
    @Body() { cpf, email, password, name, role }: UserDto,
  ): Promise<IUserEntity> {
    try {
      return await this.service.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });
    } catch (err) {
      console.log(err);
    }
  }

  @Patch()
  async updateUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      console.log(err);
    }
  }
}
