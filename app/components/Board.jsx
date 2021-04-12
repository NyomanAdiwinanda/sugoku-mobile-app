import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/styles.js';
import { setNewBoard } from '../store/actions.js';

export default function Board(props) {
  const dispatch = useDispatch();

  const handleOnChangeInput = (value, rowIndex, colIndex) => {
    dispatch(
      setNewBoard({
        value,
        rowIndex,
        colIndex,
      })
    );
  };

  return (
    <View style={styles.row}>
      {props.data.row.map((col, colIndex) => {
        if (props.data.initialBoard[props.data.rowIndex][colIndex] === 0) {
          return (
            <TextInput
              key={colIndex}
              style={styles.boxInput}
              keyboardType="number-pad"
              onChangeText={(value) =>
                handleOnChangeInput(
                  Number(value),
                  props.data.rowIndex,
                  colIndex
                )
              }
              maxLength={1}
              value={
                props.data.board[props.data.rowIndex][colIndex] === 0
                  ? ''
                  : `${props.data.board[props.data.rowIndex][colIndex]}`
              }
            />
          );
        } else {
          return (
            // <TextInput
            //   value={`${col}`}
            //   key={colIndex}
            //   style={styles.boxInput}
            //   keyboardType="number-pad"
            //   onChangeText={(value) =>
            //     handleOnChangeInput(
            //       Number(value),
            //       props.data.rowIndex,
            //       colIndex
            //     )
            //   }
            //   maxLength={1}
            // />
            <Text key={colIndex} style={styles.boxStatic}>
              {col}
            </Text>
          );
        }
      })}
    </View>
  );
}
