const initialState = {
  userLists: {
    presentList: [],
    quittingList: [],
  },
  selectedList: 'presentList',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_INFO':
      return {
        ...state,
        userLists: action.payload,
      };
    case 'CHANGE_LIST':
      return {
        ...state,
        selectedList: action.payload,
      };
    default:
      return state;
  }
}
