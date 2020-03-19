const initialState = {
  userLists: {
    presentList: [],
    quittingList: [],
  },
  selectedList: 'presentList',
  selectedPatient: {},
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
    case 'CHANGE_PATIENT':
      return {
        ...state,
        selectedPatient: action.payload,
      };
    default:
      return state;
  }
}
