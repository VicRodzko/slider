import data from '../data/slider_content.json';

const initialState = {
  data: data,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SWITCHING_TASK':
      return {
        ...state,
        data: state.data.map(item => {
          if (
            item.id === action.idElemFirst ||
            item.id === action.idElemSecond ||
            item.id === action.idElemThird
          ) {
            return { ...item, active: item.active ? false : true };
          } else return { ...item, active: false };
        }),
      };

    default:
      return state;
  }
}

export default reducer;
