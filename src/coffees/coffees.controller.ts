import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service'

// string passed to the @Controller is the string of the route it will be handling i.e. /coffees
@Controller('coffees')
export class CoffeesController {
  // private declares and inits the coffeeServices in the same location, only accessible in the class itself
  // readonly makes sure we don't modify the service
  constructor(private readonly coffeesService: CoffeesService) { }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery
    return this.coffeesService.findAll()
  }
  // findAll(@Query() paginationQuery) {
  //   const { limit, offset } = paginationQuery
  //   return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`
  // }
  // findAll() {
  //   return 'This action returns all coffees'
  // }
  // findAll(@Res() response) {
  //   // flexibile for controlling response options, but should only be used with care as some Nest features won't work with it. Adds in platform dependencies, not great
  //   response.status(200).send('This action returns all coffees')
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffee`
    return this.coffeesService.findOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    // create(@Body('name') body) { -- this accessses only one param on the body and does not validate any other params. Not great to use. Cannot return body.name, so if you do have to have it, you can pass 'string' to get param
    return this.coffeesService.create(body)
    // return body
    // this action creates a coffee
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // passing in param and body: passing in param of item to update and the payload that we are updating with
    return this.coffeesService.update(id, body)
    // return `This action updates #${id} coffee`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id)
    // return `This action removes #${id} coffee`
  }
}
