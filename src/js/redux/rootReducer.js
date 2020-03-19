const initialState = {
  presentList: [],
  quittingList: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_INFO':
      return {
        ...state,
        presentList: action.payload.presentList,
        quittingList: action.payload.quittingList,
      };
    default:
      return state;
  }
}
