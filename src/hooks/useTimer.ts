import {useRef, useState} from 'react';

export default (timeOut: number, onFinish?: () => any, onClear?: () => any) => {
  const clearRef = useRef<any>(null);
  const [isTimeLeft, setIsTimeLeft] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const start = () => {
    let timer = timeOut;
    let hours;
    let minutes;
    let seconds;
    const interval = setInterval(function () {
      //@ts-ignore
      hours = parseInt(timer / 3600, 10);
      //@ts-ignore
      minutes = parseInt(timer / 60, 10);
      //@ts-ignore
      seconds = parseInt(timer % 60, 10);

      hours = String(hours < 10 ? '0' + hours : hours);
      minutes = String(minutes < 10 ? '0' + minutes : minutes);
      seconds = String(seconds < 10 ? '0' + seconds : seconds);

      setTimeLeft({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
      setIsTimeLeft(true);

      if (--timer < 0) {
        onFinish && onFinish();
        clearInterval(interval);
        setIsTimeLeft(false);
      }
    }, 1000);

    clearRef.current = () => {
      clearInterval(interval);
      setIsTimeLeft(false);
      setTimeLeft({hours: '00', minutes: '00', seconds: '00'});
      onClear && onClear();
    };
  };

  const clear = () => clearRef?.current && clearRef?.current();

  return {start, clear, timeLeft, isTimeLeft};
};
