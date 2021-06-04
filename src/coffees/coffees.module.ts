import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';

// class ConfigService { }
// class DevelopmentConfigService { }
// class ProductionConfigService { }
// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     // do something
//     return ['buddy brew 2', 'nescafe 2']
//   }
// }

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])], // registers this for the feature only for the feature with .forFeature. Only use .forRoot one in the main
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // CoffeeBrandsFactory,
    // { provide: COFFEE_BRANDS, useFactory: (brandsFactory: CoffeeBrandsFactory) => brandsFactory.create(), inject: [CoffeeBrandsFactory] },
    // { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
    // { provide: COFFEE_BRANDS, useFactory: async () => ['buddy brew', 'nescafe'] },
    {
      provide: 'COFFEE_BRANDS',
      // Note "async" here, and Promise/Async event inside the Factory function
      // Could be a database connection / API call / etc
      // In our case we're just "mocking" this type of event with a Promise
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * ...');
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
        return coffeeBrands;
      },
      inject: [Connection],
    },
    // { provide: ConfigService, useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService }
  ],
  exports: [CoffeesService]
})
export class CoffeesModule { }
