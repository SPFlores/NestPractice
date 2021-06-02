import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
// using --dry-run flag on any command will show you what will happen (file structure) if the command is run but won't actually run it

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  // controllers: handle requests in the app
  providers: [AppService],
})
export class AppModule {}
