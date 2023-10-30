import {z} from 'zod';
import {
  emailSchema,
  nameSchema,
  passwordSchema,
  phoneNumberSchema,
} from './index';

export const loginRegisterSchema = z.object({
  phoneNumber: phoneNumberSchema,
});

export const registerFormSchema = z
  .object({
    firstName: nameSchema('First Name'),
    lastName: nameSchema('Last Name'),
    email: emailSchema,
    password: passwordSchema('Password'),
    confirmPassword: passwordSchema('Confirm Password'),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });
