import { navigate } from "../../Utils/Helpers";
import { navigateToProfile, setApiData } from "./Home.actions";
import { fetchSomething } from "../../Services/Api";

export const goToProfilePage = (history) => {
  return (dispatch) => {
    dispatch(navigateToProfile());
    navigate(history).to("profile");
  };
};

export const fetchSomeData = (history) => {
  return async (dispatch) => {
    const data = await fetchSomething();
    dispatch(setApiData(data));
  };
};
