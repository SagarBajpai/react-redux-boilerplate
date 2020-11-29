export const HomeActions = {
  NAVIGATE_TO_PROFILE: "home/NAVIGATE_TO_PROFILE",
  CHANGE_LOADER: "home/CHANGE_LOADER",
  SET_API_DATA: "home/SET_API_DATA",
};

export const navigateToProfile = () => {
  return {
    type: HomeActions.NAVIGATE_TO_PROFILE,
    payload: null,
  };
};

/**
 *
 * @param {boolean} loaderState
 */
export const changeLoader = (loaderState) => ({
  type: HomeActions.CHANGE_LOADER,
  payload: loaderState,
});

export const setApiData = (apiData) => ({
  type: HomeActions.SET_API_DATA,
  payload: apiData,
});
