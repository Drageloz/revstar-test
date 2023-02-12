import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard';
import { InventaryService } from 'src/domain/service/inventary.service';
import { UtilsService } from 'src/domain/service/utils.service';

@Controller('api/inventary')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('/send')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('inventary'))
  async sendMail(@UploadedFile() file: Express.Multer.File) {
    return await this.utilsService.sendMail(file);
  }
}
