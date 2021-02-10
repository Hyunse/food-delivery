import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
