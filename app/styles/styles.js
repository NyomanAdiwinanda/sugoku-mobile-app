import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  boxInput: {
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 0.2,
    fontSize: 30,
    width: 40,
  },
  boxStatic: {
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 0.2,
    fontSize: 30,
    width: 40,
    backgroundColor: '#F8F0C6',
  },
  boldBottom: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: 200,
    borderWidth: 0.5,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
    fontSize: 20,
  },
  button: {
    flexDirection: 'row',
  },
  unselectedDifficulty: {
    backgroundColor: 'white',
    width: 70,
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  selectedDifficulty: {
    backgroundColor: 'black',
    width: 70,
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  unselectedText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  selectedText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  playButton: {
    backgroundColor: '#88CA5E',
    width: 90,
    height: 45,
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  playButtonText: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#DAA520',
    width: 150,
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
  solverButton: {
    backgroundColor: '#8B0000',
    width: 150,
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  solverButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
  finishButton: {
    backgroundColor: '#00BFFF',
    width: 150,
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  finishButtonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
  game: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  playerName: {
    marginVertical: 15,
  },
  timer: {
    fontSize: 25,
    textAlign: 'center',
  },
});
