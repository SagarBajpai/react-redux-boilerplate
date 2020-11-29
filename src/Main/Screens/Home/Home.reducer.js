import { HomeActions } from "./Home.actions";
import { HomeStates } from "./Home.states";

const HomeReducer = (state = HomeStates, action) => {
  switch (action.type) {
    case HomeActions.CHANGE_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case HomeActions.SET_API_DATA:
      return {
        ...state,
        apiData: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
