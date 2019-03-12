const initialState = {
  age: 21,
}

const reducer = (state = initialState, action) => {

  const newState = { ...state };

  switch (action.type) {
    case 'AGE_UP':
      return {
        ...state,
        age: state.age + action.value
      }
    case 'AGE_Down':
      return {
        ...state,
        age: state.age - action.value
      }
  }
  return newState;
}

export default reducer;