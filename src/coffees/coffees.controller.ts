import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

// string passed to the @Controller is the string of the route it will be handling i.e. /coffees
@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees'
  }
  // findAll(@Res() response) {
  //   // flexibile for controlling response options, but should only be used with care as some Nest features won't work with it. Adds in platform dependencies, not great
  //   response.status(200).send('This action returns all coffees')
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    // create(@Body('name') body) { -- this accessses only one param on the body and does not validate any other params. Not great to use. Cannot return body.name, so if you do have to have it, you can pass 'string' to get param
    return body
    // this action creates a coffee
  }
}
