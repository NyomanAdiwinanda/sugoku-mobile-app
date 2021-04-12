import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { setDifficulty, setIsValidate } from '../store/actions.js';
import { styles } from '../styles/styles.js';
// import LottieView from 'lottie-react-native';

export default function Home({ navigation }) {
  const [playerName, setPlayerName] = useState('');
  const difficulty = useSelector((state) => state.difficulty);

  const dispatch = useDispatch();

  dispatch(setIsValidate('unsolved'));

  const handleOnChangeText = (value) => {
    setPlayerName(value);
  };

  const selectDifficulty = (selectedDifficulty) => {
    dispatch(setDifficulty(selectedDifficulty));
  };

  const playSugoku = () => {
    if (!playerName) {
      Alert.alert('Empty player name', 'Please input player name');
    } else if (!difficulty) {
      Alert.alert('No difficulty selected', 'Please choose difficulty');
    } else {
      navigation.navigate('Game', {
        playerName,
        difficulty,
      });
      setPlayerName('');
      dispatch(setDifficulty(''));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sugokuLogo}>
        {/* <LottieView
          loop={true}
          autoPlay={true}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'white',
          }}
          source={require('../assets/30755-arena-spinning.json')}
        /> */}
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            paddingTop: 10,
            fontWeight: '600',
          }}
        >
          Sugoku
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Player Name</Text>
        <TextInput
          name="player"
          style={styles.input}
          placeholder={'Input Your Name'}
          value={playerName}
          onChangeText={(value) => handleOnChangeText(value)}
        />
      </View>
      <View>
        <Text style={styles.label}>Select Difficulty</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={
              difficulty === 'easy'
                ? styles.selectedDifficulty
                : styles.unselectedDifficulty
            }
            onPress={() => selectDifficulty('easy')}
          >
            <Text
              style={
                difficulty === 'easy'
                  ? styles.selectedText
                  : styles.unselectedText
              }
            >
              Easy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              difficulty === 'medium'
                ? styles.selectedDifficulty
                : styles.unselectedDifficulty
            }
            onPress={() => selectDifficulty('medium')}
          >
            <Text
              style={
                difficulty === 'medium'
                  ? styles.selectedText
                  : styles.unselectedText
              }
            >
              Medium
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              difficulty === 'hard'
                ? styles.selectedDifficulty
                : styles.unselectedDifficulty
            }
            onPress={() => selectDifficulty('hard')}
          >
            <Text
              style={
                difficulty === 'hard'
                  ? styles.selectedText
                  : styles.unselectedText
              }
            >
              Hard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              difficulty === 'random'
                ? styles.selectedDifficulty
                : styles.unselectedDifficulty
            }
            onPress={() => selectDifficulty('random')}
          >
            <Text
              style={
                difficulty === 'random'
                  ? styles.selectedText
                  : styles.unselectedText
              }
            >
              Random
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity style={styles.playButton} onPress={playSugoku}>
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
