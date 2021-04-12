import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Alert, Button } from 'react-native';
import { solver } from '../store/actions.js';
import { styles } from '../styles/styles.js';

export default function Timer(props) {
  const [counter, setCounter] = useState(1800);

  const dispatch = useDispatch();

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;

  if (minutes === 0 && seconds === 1) {
    setTimeout(() => {
      dispatch(solver(props.data));
    }, 1000);
  }

  return (
    <View>
      <Text style={styles.timer}>
        {minutes <= 9 ? `0${minutes}` : minutes} :{' '}
        {seconds <= 9 ? `0${seconds}` : seconds}
      </Text>
    </View>
  );
}
