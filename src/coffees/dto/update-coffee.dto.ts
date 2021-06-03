import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

// PartialType says "okay take this type, but set all props to optional", inherits all validation types, adds IsOptional rule as well
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
