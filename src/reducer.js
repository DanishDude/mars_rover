const direction = ['N', 'E', 'S', 'W']

const initialState = {
  x: 3,
  y: 3,
  position: direction[1],
};

const move = (state = initialState, action) => {
  let index = direction.findIndex(index => index === state.position);
  switch (action.type) {
    case 'RIGHT':
      return {
        ...state,
        position: index === 3 ? direction[0] : direction[index + 1],
      }
    case 'LEFT':
      return {
        ...state,
        position: index === 0 ? direction[3] : direction[index - 1],
      }
    case 'MOVE':
      switch (state.position) {
        case 'N':
          return {
            ...state,
            y: state.y + 1,
          }
        case 'E':
          return {
            ...state,
            x: state.x + 1,
          }
        case 'S':
          return {
            ...state,
            y: state.y - 1,
          }
        case 'W':
          return {
            ...state,
            x: state.x - 1,
          }
        default:
          return state;
      }
    default:
      return state;
  }
}

export default move;
