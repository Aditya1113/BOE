import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "./IceCreamAction";

const IceCreamContainer = () => {
  const result = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="blue-text text-darken-3">
        Number of IceCream : {result.ice.numberOfIceCream}
      </h3>

      <button
        onClick={() => dispatch(buyIceCream())}
        className="wave-effect wave-light btn-purple"
      >
        Buy IceCream
      </button>
    </div>
  );
};

export default IceCreamContainer;
