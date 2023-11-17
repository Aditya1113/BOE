import React from "react";

const IceCreamContainer = () => {
  const result = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="blue-text text-darken-3">
        Number of IceCream : {result.numberOfIceCream}
      </h3>

      <button
        onClick={() => dispatch(buyCake(qty))}
        className="wave-effect wave-light btn-purple"
      >
        Buy IceCream
      </button>
    </div>
  );
};

export default IceCreamContainer;
