import React from "react";

const Student = (props) => {
  return (
    <div>
      <h2>Props with Array of Objects</h2>
      {props.students.map((std) => (
        <li>
          {std.id} {std.name} {std.gender}
        </li>
      ))}
    </div>
  );
};

export default Student;
