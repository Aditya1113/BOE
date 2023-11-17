import { BUY_ICE_CREAM } from "./IceCreamActionType";

export const inititalState = {
  numberOfIceCream: 50,
};

const IceCreamReducer = (state = inititalState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default IceCreamReducer;
