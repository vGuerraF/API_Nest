import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './services/dto/partialUserInput.dto';
import { Exceptions } from './utils/exceptions/exceptionsHelper';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: IUserEntity): Promise<IUserEntity> {
    try {
      const CreatedUser = await this.prisma.user.create({ data: user });
      return CreatedUser;
    } catch (err) {
      throw { message: err.message, exception: Exceptions.DatabaseException };
    }
  }

  async updateUser(user: PartialUserDto): Promise<IUserEntity> {
    const UpdatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return UpdatedUser;
  }

  async deleteUser(id: string): Promise<IUserEntity> {
    const deleteUser = await this.prisma.user.delete({
      where: { id: id },
    });
    return deleteUser;
  }

  async findAllUsers(): Promise<IUserEntity[]> {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }

  async findUserById(id: string): Promise<IUserEntity> {
    const foundUser = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });
    return foundUser;
  }
}
