import {z} from 'zod';

export const nameSchema = (name: string, max: number = 50) =>
  z
    .string()
    .trim()
    .min(1, {message: `${name} is required`})
    .max(max, `${name} maximum ${max} character`)
    .regex(/^[a-zA-Z ]*$/, 'Invalid Name, only alphabet and space allowed');

export const emailSchema = z
  .string()
  .trim()
  .min(1, 'Email is required')
  .email('Invalid email format, please check your email address');

export const passwordSchema = (
  name: string,
  min: number = 6,
  max: number = 50,
) =>
  z
    .string()
    .min(6, {message: `${name} must be at least ${min} characters`})
    .max(max, `${name} maximum ${max} character`);

export const phoneNumberSchema = z
  .string()
  .regex(/^\d+$/, 'Invalid phone number, only numbers allowed')
  .min(9, 'Phone Number at least 9 character')
  .max(14, 'Phone Number maximum 14 character');

export const NIKSchema = z
  .string()
  .length(16, 'Invalid NIK, length must be 16 character')
  .regex(/^\d+$/, 'Invalid NIK, only number allowed');

export const NPWPSchema = z
  .string()
  .min(10, 'Format id card number invalid min. 10 character')
  .max(20, 'Format id card number invalid max. 20 character')
  .regex(
    /^[\d.-]+$/,
    'Format id card number invalid only number, dash, and dot allowed',
  );

export const LatLngSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

export const addressSchema = z
  .string()
  .trim()
  .min(1, 'This field is required')
  .max(200, 'Address maximum is 200 character')
  .regex(
    /^[a-zA-Z\d\s,./-]+$/,
    'Format complete address invalid only alphabet & number allowed',
  );
