import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard';
import { UtilsService } from 'src/domain/service/utils.service';

@Controller('api/inventary')
@ApiTags('Utils')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('/send')
  @ApiOperation({ summary: 'Send Email with File throw SES AWS' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('inventary'))
  async sendMail(@UploadedFile() file: Express.Multer.File) {
    return await this.utilsService.sendMail(file);
  }
}
