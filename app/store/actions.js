import axios from 'axios';

const setInitialBoard = (payload) => {
  return {
    type: 'initialBoard/setInitialBoard',
    payload,
  };
};

const setBoard = (payload) => {
  return {
    type: 'board/setBoard',
    payload,
  };
};

const setLoading = (payload) => {
  return {
    type: 'loading/setLoading',
    payload,
  };
};

const setError = (payload) => {
  return {
    type: 'error/setError',
    payload,
  };
};

export const setDifficulty = (payload) => {
  return {
    type: 'difficulty/setDifficulty',
    payload,
  };
};

export const setIsValidate = (payload) => {
  return {
    type: 'isValidate/setIsValidate',
    payload,
  };
};

export const setNewBoard = (payload) => {
  return {
    type: 'newBoard/setNewBoard',
    payload,
  };
};

export const fetchBoard = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      url: `https://sugoku.herokuapp.com/board?difficulty=${payload}`,
      method: 'GET',
    })
      .then(({ data }) => {
        dispatch(setBoard(data.board));
        dispatch(setInitialBoard(data.board));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        console.log(err);
      });
  };
};

export const solver = (payload) => {
  return (dispatch) => {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? '' : '%2C'
          }`,
        ''
      );

    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');

    const data = { board: payload };

    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then((response) => response.json())
      .then((response) => dispatch(setBoard(response.solution)))
      .catch(console.warn);
  };
};

export const validate = (payload) => {
  return (dispatch) => {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? '' : '%2C'
          }`,
        ''
      );

    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');

    const data = { board: payload };

    axios({
      url: 'https://sugoku.herokuapp.com/validate',
      method: 'POST',
      data: encodeParams(data),
    })
      .then(({ data }) => {
        dispatch(setIsValidate(data.status));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
