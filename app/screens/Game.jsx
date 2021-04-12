import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { fetchBoard, solver, validate } from '../store/actions.js';
import { styles } from '../styles/styles.js';
import Board from '../components/Board.jsx';
import Timer from '../components/Timer.jsx';

export default function Gameplay({ route, navigation }) {
  const { playerName, difficulty } = route.params;

  const board = useSelector((state) => state.board);
  const initialBoard = useSelector((state) => state.initialBoard);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const isValidate = useSelector((state) => state.isValidate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoard(difficulty));
  }, []);

  const solveGame = (payload) => {
    dispatch(solver(payload));
  };

  dispatch(validate(board));

  const validateGame = () => {
    if (isValidate === 'solved') {
      navigation.replace('Finish', {
        playerName,
      });
    } else {
      Alert.alert(
        'Not quite right yet',
        "There's still some mistakes on your board"
      );
    }
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>There's something error</Text>
        <Text style={{ fontSize: 20 }}>Please Restart The App</Text>
      </View>
    );
  }

  return (
    <View style={styles.game}>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" style={{ marginBottom: 20 }} />
          <Text style={{ fontSize: 20 }}>Generating Board</Text>
          <Text style={{ fontSize: 20 }}>Please Wait</Text>
        </View>
      ) : (
        <>
          <View style={styles.playerName}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: '600',
                marginBottom: 15,
              }}
            >
              {playerName}
            </Text>
            <Timer data={initialBoard} />
          </View>
          {board.map((row, rowIndex) => {
            return (
              <Board
                key={rowIndex}
                data={{ row, rowIndex, initialBoard, board }}
              />
            );
          })}
          <View style={[styles.row, { marginTop: 30 }]}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                validateGame();
              }}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.solverButton}
              onPress={() => solveGame(initialBoard)}
            >
              <Text style={styles.solverButtonText}>Use Solver</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
