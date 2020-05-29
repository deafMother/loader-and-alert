export const modal = (state = { status: false, message: "" }, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, ...action.data };
    default:
      return state;
  }
};

//  if the modal status is true then show the modal
