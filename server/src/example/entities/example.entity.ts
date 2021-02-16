import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Example {

  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  name: string;

  @Field(() => Boolean, { defaultValue: true})
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isExample?: boolean;

  @Field(() => Number, { defaultValue: 1 })
  @Column()
  @IsNumber()
  age: number;
}
