import { UsersDTO } from '../model/dto/users.dto';

export interface AuthInterface {
  auth(user: UsersDTO);
  register(user: UsersDTO);
}
