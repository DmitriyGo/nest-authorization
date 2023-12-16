import { IsEmail, IsString, MinLength, Validate } from 'class-validator';

import { IsPasswordsMatchingConstraint } from '@common/decorators';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  @Validate(IsPasswordsMatchingConstraint)
  passwordConfirmation: string;
}
