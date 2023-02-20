import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/services/user.service';
import { DatabaseModule } from './prisma/database.module';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
