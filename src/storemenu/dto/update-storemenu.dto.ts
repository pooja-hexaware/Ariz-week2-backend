import { PartialType } from '@nestjs/mapped-types';
import { CreateStoremenuDto } from './create-storemenu.dto';

export class UpdateStoremenuDto extends PartialType(CreateStoremenuDto) {}
