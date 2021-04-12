import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
// import LottieView from 'lottie-react-native';

export default function Finish({ route, navigation }) {
  const { playerName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: '600' }}>
        Congratulation {playerName}
      </Text>
      {/* <LottieView
        loop={true}
        autoPlay={true}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'white',
        }}
        source={require('../assets/17425-cup-winner.json')}
      /> */}
      <Text style={{ fontSize: 25 }}>You have finished the game</Text>
      <TouchableOpacity
        style={[styles.finishButton, { marginTop: 20 }]}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.finishButtonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}
