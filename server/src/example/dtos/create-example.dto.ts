import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateExampleDto {
  @Field(() => String)
  name: string;

  @Field(() => Boolean, { nullable: true })
  isExample?: boolean;

  @Field(() => Number, { nullable: true})
  age: number;
}