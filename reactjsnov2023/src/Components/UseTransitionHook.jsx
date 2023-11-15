import React, { useState, useTransition } from "react";

const useTransitionHook = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const List_size = 20000;

  const handleChange = (event) => {
    //without transition
    // setInput(event.target.value)
    // const l=[]
    // for (let i=0;i<List_size;i++){
    //     l.push(event.target.value)
    // }
    // setList(l)

    //with transition
    setInput(event.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < List_size; i++) {
        l.push(event.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}></input>
      {isPending?"Loading....":list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default useTransitionHook;
