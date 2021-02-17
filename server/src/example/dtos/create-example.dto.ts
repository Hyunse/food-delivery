import { InputType, OmitType } from '@nestjs/graphql';
import { Example } from '../entities/example.entity';


// Dtat Tranfer Object
// an Object that carries data between processes.
@InputType()
export class CreateExampleDto extends OmitType(Example, ['id']) {
  
}
