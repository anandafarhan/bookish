import {Pressable} from 'react-native';
import {ms} from 'react-native-size-matters';
import React, {useEffect, useState} from 'react';
import {ScrollView, Stack, Text, XStack} from 'tamagui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Styles from 'src/styles';
import useAuth from 'src/stores/auth';
import useTimer from 'src/hooks/useTimer';
import Button from 'src/components/Button/Button';
import InputOTP from 'src/components/Input/InputOTP';
import {HeaderChild} from 'src/components/Header/Header';
import {RootStackParamList} from 'src/routers/routerType';

type Props = NativeStackScreenProps<RootStackParamList, 'auth/login/otp'>;

const LoginOTPForm = ({route}: Props) => {
  const {username} = route.params;
  const [loading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const {
    start,
    clear,
    timeLeft: {minutes, seconds},
    isTimeLeft,
  } = useTimer(60);

  useEffect(() => {
    start();

    return () => clear();
  }, []);

  const handleSubmit = async () => {
    console.log('====================================');
    console.log('SUBMIT', otp);
    console.log('====================================');
    useAuth.setState({isLoggedIn: true});
  };

  const resendOTP = async () => {
    start();
  };

  return (
    <>
      <Stack flex={1} paddingBottom={Styles.safeArea.paddingBottom}>
        <HeaderChild noShadow />
        <ScrollView flexGrow={1}>
          <Stack
            paddingVertical={ms(24)}
            paddingHorizontal={ms(24)}
            alignItems="center">
            <Text
              fontWeight={'900'}
              fontSize={ms(20)}
              textAlign="center"
              marginBottom={4}>
              Masukkan Kode OTP untuk Verifikasi Login
            </Text>
            <Text textAlign="center" fontSize={ms(12)} marginBottom={10}>
              Silahkan cek Whatsapp, kode Verifikasi anda sudah dikirim ke Nomor
              Whatsapp{' '}
              <Text color="$primary900" fontWeight={'600'}>
                +62{username}
              </Text>
            </Text>
            <InputOTP
              value={otp}
              onTextChange={text => {
                setOtp(text);
                setOtpError('');
              }}
            />
            {otpError && (
              <Text
                textAlign="center"
                fontSize={ms(12)}
                marginTop={10}
                color="$primary">
                {otpError}
              </Text>
            )}

            <XStack marginTop={10} alignItems="center" justifyContent="center">
              <Text fontSize={ms(12)} fontWeight={'900'}>
                Kirim Ulang Kode?{' '}
              </Text>
              {!isTimeLeft ? (
                <Pressable onPress={resendOTP}>
                  <Text
                    fontSize={ms(12)}
                    fontWeight={'900'}
                    color="$blue"
                    textDecorationLine="underline"
                    onPress={() => resendOTP()}>
                    Kirim Ulang
                  </Text>
                </Pressable>
              ) : (
                <Text fontSize={ms(12)} fontWeight={'900'} color="$blue">
                  {minutes}:{seconds}
                </Text>
              )}
            </XStack>
          </Stack>
        </ScrollView>
        <Stack backgroundColor={'white'} paddingHorizontal={ms(24)}>
          <Button
            disabled={otp.length !== 4}
            onPress={handleSubmit}
            isLoading={loading}>
            Verifikasi
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default LoginOTPForm;
