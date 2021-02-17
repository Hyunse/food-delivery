import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './entities/example.entity';
import { ExampleResolver } from './example.resolver';
import { ExampleService } from './example.service';

@Module({
  // TypeOrmModule forFeature : define which repositories are registered in the current scope.
  // With that in place, we can inject the ExampleRepository into the ExampleService using the
  // @InjectRepository() decorator 
  imports: [TypeOrmModule.forFeature([Example])],
  // Provier: it can inject dependencies
  providers: [ExampleResolver, ExampleService],
})
export class ExampleModule {}
