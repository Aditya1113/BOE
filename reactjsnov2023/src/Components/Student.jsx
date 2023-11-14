import React from "react";

const Student = (props) => {

    const sayHello=(name)=>{
            alert(`Hi ${name}`)
    }
  return (
    <div>
      <h2>Props with Array of Objects</h2>
      {props.students.map((std) => (
        <>
          <li>
            {std.id} {std.name} {std.gender}
          </li>
          <button onClick={()=>sayHello(std.name)}>Greet</button>
        </>
      ))}
    </div>
  );
};

export default Student;
