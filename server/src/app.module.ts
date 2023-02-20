import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/services/user.service';
import { DatabaseModule } from './prisma/database.module';
import { UserRepository } from './user/user.repository';
import { ClassroomModule } from './classroom/classroom.module';
import { AttendanceListModule } from './attendance-list/attendance-list.module';

@Module({
  imports: [DatabaseModule, ClassroomModule, AttendanceListModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
