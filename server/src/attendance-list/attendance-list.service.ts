import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ClassroomService } from 'src/classroom/classroom.service';
import { CreateAttendanceListDto } from './dto/create-attendance-list.dto';
import { UpdateAttendanceListDto } from './dto/update-attendance-list.dto';
import { AttendanceList } from './entities/attendance-list.entity';

@Injectable()
export class AttendanceListService {
  private _atendenceList: AttendanceList[] = [];
  constructor(private readonly classroomService: ClassroomService) {}

  async create(
    createAttendanceListDto: CreateAttendanceListDto,
  ): Promise<AttendanceList> {
    await this.classroomService.findOne(createAttendanceListDto.classroomId);
    const EndDateToAttendance = 2 * 60 * 1000;
    const attendanceToday = new AttendanceList();
    (attendanceToday.id = randomUUID()),
      (attendanceToday.startDate = new Date(Date.now())),
      (attendanceToday.endDate = new Date(Date.now() + EndDateToAttendance)),
      (attendanceToday.students = []),
      (attendanceToday.day = new Date(Date.now()).toISOString()),
      this._atendenceList.push(attendanceToday);
    return Promise.resolve(attendanceToday);
  }

  async findAll() {
    return `This action returns all attendanceList`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} attendanceList`;
  }

  async update(id: number, updateAttendanceListDto: UpdateAttendanceListDto) {
    return `This action updates a #${id} attendanceList`;
  }

  async remove(id: number) {
    return `This action removes a #${id} attendanceList`;
  }
}
