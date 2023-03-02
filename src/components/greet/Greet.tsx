/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
import React from "react";
// types :
import { GreetProps } from "./Greet.types";

const Greet = ({ name }: GreetProps) => {
  /* ******************************** rendering ******************************* */
  return <div>hello {name}</div>;
};
export default Greet;
