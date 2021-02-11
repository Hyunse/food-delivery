import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateExampleDto } from './dtos/create-example.dto';
import { Example } from './entities/example.entity';

@Resolver()
export class ExampleResolver {
  @Query(() => Boolean)
  testExample(): Boolean {
    return true;
  }

  @Query(returns => Boolean)
  findExample(): boolean {
    return true;
  }

  @Query(returns => [Example])
  findExamples(@Args('ask') ask: boolean): Example[] {
    return [];
  }

  @Mutation(returns => Boolean)
  createExample(
    @Args() createExampleDto: CreateExampleDto,
  ): boolean {
    console.log(createExampleDto);
    return true;
  }
}
