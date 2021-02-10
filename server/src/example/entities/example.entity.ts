import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Example {
  @Field(() => String)
  name: string;

  @Field(() => Boolean, { nullable: true })
  isExample?: boolean;
}
