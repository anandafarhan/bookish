import {z} from 'zod';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {Image, Stack, Text} from 'tamagui';
import {ms} from 'react-native-size-matters';
import {zodResolver} from '@hookform/resolvers/zod';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

import images from 'src/assets/images';
import Button from 'src/components/Button/Button';
import {formatPhoneNumber} from 'src/utils/utils';
import {loginRegisterSchema} from 'src/schema/authSchema';
import useAppNavigation from 'src/hooks/useAppNavigation';
import InputPhoneNumber from 'src/components/Input/InputPhoneNumber';

const LoginRegisterForm = () => {
  const navigation = useAppNavigation();
  const [loading, setLoading] = useState(false);

  type Form = z.infer<typeof loginRegisterSchema>;

  const {control, handleSubmit} = useForm<Form>({
    defaultValues: {
      phoneNumber: '',
    },
    reValidateMode: 'onChange',
    resolver: zodResolver(loginRegisterSchema),
  });

  const onSubmit: SubmitHandler<Form> = async (data): Promise<void> => {
    setLoading(true);
    navigation.navigate('auth/login/otp', {
      username: formatPhoneNumber(data?.phoneNumber),
    });
    setLoading(false);
  };

  return (
    <Stack flex={1}>
      <Stack
        height="40%"
        backgroundColor={'$primary900'}
        borderBottomRightRadius={200}
        justifyContent="center">
        <Image
          source={images.meteor_white}
          width="70%"
          resizeMode="contain"
          alignSelf="center"
        />
      </Stack>

      <Stack marginTop={50} paddingHorizontal={20}>
        <Controller
          name="phoneNumber"
          control={control}
          render={({field, fieldState}) => (
            <InputPhoneNumber
              {...field}
              onChangeText={field.onChange}
              error={fieldState.invalid}
              errorText={fieldState?.error?.message}
              label="Nomor HP Anda"
              placeholder="Contoh: 823456212"
              footer={
                'Nomor handphone harus terhubung dengan Whatsapp untuk menerima OTP.'
              }
              isRequired
            />
          )}
        />
        <Button
          backgroundColor={'$primary900'}
          marginTop={10}
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}>
          Masuk / Daftar
        </Button>
        <Stack marginVertical={10}>
          <Pressable>
            <Text
              color="#045BA7"
              fontWeight={'700'}
              textAlign="center"
              fontSize={ms(10)}>
              Tidak bisa mengakses nomor
            </Text>
          </Pressable>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginRegisterForm;
