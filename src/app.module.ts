import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
// using --dry-run flag on any command will show you what will happen (file structure) if the command is run but won't actually run it

@Module({
  imports: [CoffeesModule],
  // controllers: handle requests in the app
  controllers: [AppController],
  // providers can inject dependencies
  providers: [AppService],
})
export class AppModule {}
