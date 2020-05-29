import axios from "../api";
export const fetchPosts = () => async (dispatch, getState) => {
  // befor esending the request start the loader

  dispatch(showLoader(true));

  try {
    const response = await axios.get("/posts/");
    dispatch({
      type: "LIST",
      data: response.data,
    });

    // after  rexeiving the response  show the success modal
    dispatch(showLoader(false));

    dispatch({
      type: "SHOW_MODAL",
      data: {
        status: true,
        error: false,
        message: "data fetched successfully",
      },
    });
  } catch (err) {
    // after  rexeiving the response  show the error modal
    dispatch(showLoader(false));
    dispatch({
      type: "SHOW_MODAL",
      data: {
        status: true,
        error: true,
        message: "error please try later",
      },
    });
  }
  //stop loader
};

export const hideModdal = () => {
  return {
    type: "SHOW_MODAL",
    data: {
      status: false,
    },
  };
};

export const showLoader = (show) => {
  return {
    type: "LOADER",
    show,
  };
};
