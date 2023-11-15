import React, { createContext, useState } from "react";
import CompB from "./CompB";

export const userContext = createContext({});

const CompA = () => {
  return (
    <userContext.Provider value={{ username: "Mike", age: 32 }}>
      <CompB />
    </userContext.Provider>
  );
};

export default CompA;
