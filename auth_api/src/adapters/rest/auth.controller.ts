import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard';
import { LocalAuthGuard } from 'src/domain/guard/local-auth.guard';
import { UsersDTO } from 'src/domain/model/dto/users.dto';
import { AuthService } from 'src/domain/service/auth_service_implement.service';
import { AuthUser } from 'src/utils/user.decorator';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async auth(@Body() user: UsersDTO) {
    return await this.authService.auth(user);
  }

  @Post('/register')
  async register(@Body() user: UsersDTO) {
    return await this.authService.register(user);
  }

  @Get('')
  @UseGuards(JwtAuthGuard)
  async getUser(@Req() req: any) {
    return await this.authService.getUser(req.headers.authorization);
  }
}
