import React from "react";

const Header = ({ name, age,isAdmin }) => {
  // props={
  //     name
  // }
  // let {name,age} = props

  return (
    <div>
      Welcome {name}..! {age} {isAdmin?"Yes":"No"}
    </div>
  );
};

export default Header;
