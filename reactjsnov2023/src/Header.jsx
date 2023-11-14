import React from "react";

const Header = ({ name, age }) => {
  // props={
  //     name
  // }
  // let {name,age} = props

  return (
    <div>
      Welcome {name}..! {age}
    </div>
  );
};

export default Header;
