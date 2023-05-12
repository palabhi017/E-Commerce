import React from "react";
import { Checkbox } from "@chakra-ui/react";
const CheckBoxes = ({ data }:{data:string}) => {
  return (
    <Checkbox color="black" value={data}>
      {data}
    </Checkbox>
  );
};

export default CheckBoxes;
