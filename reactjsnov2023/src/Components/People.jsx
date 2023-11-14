import React, { useState } from "react";

const People = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Peter");
  const [role,setRole] = useState(false)

  const increment = () => {
    // setCount(count+1)
    setCount((prevState) => prevState + 1);
  };

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count+1)
      setCount((prevCount) => prevCount + 1);
      console.log(count);
    }
  };

  const changeName=()=>{
    setName('Rose Dawson')
  }

  const changeRole=()=>{
    setRole(!role)
  }

  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={changeName}>Change Name</button>

      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementByFive}>Increment5</button>

      <h1>role= {role?'Admin' :'Guest'}</h1>
      <button onClick={changeRole}>Change Role</button>

    </div>
  );
};

export default People;
