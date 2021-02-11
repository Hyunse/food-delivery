import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator'

@ObjectType()
export class Example {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  isExample?: boolean;

  @Field(() => Number, { nullable: true})
  @IsNumber()
  age: number;
}
