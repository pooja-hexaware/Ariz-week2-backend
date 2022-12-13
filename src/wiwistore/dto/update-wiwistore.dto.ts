import { PartialType } from '@nestjs/mapped-types';
import { CreateWiwistoreDto } from './create-wiwistore.dto';

export class UpdateWiwistoreDto extends PartialType(CreateWiwistoreDto) {}
