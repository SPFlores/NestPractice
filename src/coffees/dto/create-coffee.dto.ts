import { IsString } from 'class-validator'

export class CreateCoffeeDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly brand: string

  @IsString({ each: true })
  // each: true says each item in the array should be a string
  readonly flavors: string[]
}
