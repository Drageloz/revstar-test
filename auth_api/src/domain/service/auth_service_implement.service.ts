import { Injectable } from '@nestjs/common';
import { AuthInterface } from '../ports/auth_service.interface';
import { AppDataSource } from '../../../data-source';
import { Users } from '../model/entity/users.entity';
import { Repository } from 'typeorm';
import { UsersDTO } from '../model/dto/users.dto';
import { Mapper } from 'src/utils/mapper';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements AuthInterface {
  constructor(private jwtService: JwtService) {}

  async checkConnection() {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  }

  async validateUser(email: string, password: string) {
    await this.checkConnection();
    const repository: Repository<Users> = AppDataSource.getRepository(Users);
    try {
      const user = await repository.findOne({
        where: { email: email },
      });

      const isMatch = await bcrypt.compare(password, user.password);

      if (user && isMatch) {
        return user;
      }
      return null;
    } catch {
      return null;
    }
  }

  async auth(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: UsersDTO) {
    await this.checkConnection();
    user = Mapper.toUser(user);
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    const repository: Repository<Users> = AppDataSource.getRepository(Users);
    try {
      await repository.save(user);
      return { status: 201 };
    } catch {
      return { status: 400, body: 'No se pudo registrar el usuario' };
    }
  }

  async getUser(jwt: string) {
    await this.checkConnection();
    const payload = this.jwtService.decode(jwt.substring(7));
    const repository: Repository<Users> = AppDataSource.getRepository(Users);
    try {
      const { id, password, ...user } = await repository.findOne({
        where: {
          email: payload['username'],
        },
      });
      return { user };
    } catch {
      return { status: 400, body: 'No se pudo encontrar el usuario' };
    }
  }
}
