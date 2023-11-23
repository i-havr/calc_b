import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommonCalculatorDto } from './dto/commonCalculator.dto';

@Injectable()
export class CalculatorService {
  add(commonCalculatorDto: CommonCalculatorDto): number {
    const { num1, num2 } = commonCalculatorDto;

    return num1 + num2;
  }

  subtract(commonCalculatorDto: CommonCalculatorDto): number {
    const { num1, num2 } = commonCalculatorDto;

    return num1 - num2;
  }

  multiply(commonCalculatorDto: CommonCalculatorDto): number {
    const { num1, num2 } = commonCalculatorDto;

    return num1 * num2;
  }

  divide(commonCalculatorDto: CommonCalculatorDto): number {
    const { num1, num2 } = commonCalculatorDto;

    if (num2 === 0) {
      throw new HttpException(
        'Division by zero is not allowed',
        HttpStatus.BAD_REQUEST,
      );
    }

    return num1 / num2;
  }
}
