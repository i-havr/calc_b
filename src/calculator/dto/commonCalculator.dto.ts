import { IsNotEmpty, IsNumber } from 'class-validator';

export class CommonCalculatorDto {
  @IsNotEmpty()
  @IsNumber()
  readonly num1: number;

  @IsNotEmpty()
  @IsNumber()
  readonly num2: number;
}
