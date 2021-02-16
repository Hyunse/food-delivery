import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Example } from '../entities/example.entity';

@InputType()
export class CreateExampleDto extends OmitType(Example, ['id']) {
  
}
