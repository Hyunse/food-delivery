import { Resolver, Query, Args } from '@nestjs/graphql';
import { Example } from './entities/example.entity';

@Resolver()
export class ExampleResolver {
  @Query(() => Boolean)
  testExample(): Boolean {
    return true;
  }

  @Query(returns => Example)
  findExample(): Example {
    return Example;
  }

  @Query(returns => [Example])
  findExamples(@Args('ask') ask: boolean): Example[] {
    return [];
  }
}
