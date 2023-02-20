import { Module } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { UserController } from 'src/user/user.controller';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
