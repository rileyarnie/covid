import * as actionTypes from "../actions/actions";

const initialState = {
  data: "",
  dailyData: "",
  countries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.GET_DAILY_DATA:
      return { ...state, dailyData: action.payload };
      case actionTypes.GET_COUNRTIES:
        return{...state, countries:action.payload}
    default:
      return state;
  }
};

export default reducer;
