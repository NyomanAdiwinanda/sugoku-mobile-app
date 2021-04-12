const initialState = {
  initialBoard: [],
  board: [],
  difficulty: '',
  isValidate: 'unsolved',
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'initialBoard/setInitialBoard':
      return { ...state, initialBoard: payload };
    case 'board/setBoard':
      return { ...state, board: payload };
    case 'difficulty/setDifficulty':
      return { ...state, difficulty: payload };
    case 'isValidate/setIsValidate':
      return { ...state, isValidate: payload };
    case 'newBoard/setNewBoard':
      const newBoard = JSON.parse(JSON.stringify(state.board));
      newBoard[payload.rowIndex][payload.colIndex] = payload.value;
      return { ...state, board: newBoard };
    case 'loading/setLoading':
      return { ...state, loading: payload };
    case 'error/setError':
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
