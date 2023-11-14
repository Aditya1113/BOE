import React from "react";

const Person = (props) => {
  let { email, fullname } = props.personDetails;
  return (
    <div>
        <h2>Props with single object</h2>
      {email},
      {fullname}
    </div>
  );
};

export default Person;
