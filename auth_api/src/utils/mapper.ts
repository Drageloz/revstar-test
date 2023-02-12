import { instanceToPlain, plainToClass } from 'class-transformer';
import { UsersDTO } from 'src/domain/model/dto/users.dto';
import { Users } from 'src/domain/model/entity/users.entity';

export class Mapper {
  static toUser(userDto: UsersDTO): Users {
    const data = instanceToPlain(userDto);
    return plainToClass(Users, data);
  }
}
