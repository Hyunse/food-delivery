import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateExampleDto } from "./create-example.dto";

@InputType()
export class UpdateExampleInputType extends PartialType(CreateExampleDto) {
}

@InputType()
export class UpdateExampleDto {
  @Field(() => Number)
  id: number
  
  @Field(() => UpdateExampleInputType)
  data: UpdateExampleInputType
}