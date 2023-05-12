import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Box, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  
  FormHelperText,
  Button,
} from "@chakra-ui/react";

interface Texts{
  title?:string,
  price?:number
}
const AdminUpdate = () => {
  const [text, textVal] = React.useState<Texts>({});

  const handleUpdateChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    textVal({ ...text, [name]: value });
  };

  return (
    <div>
      <AdminNavbar />
      <br />
      <br />
      <br />
      <Box style={{ width: "50%", margin: "auto" }}>
        <FormControl>
          <FormLabel> ₹Price</FormLabel>
          <Input
            type="number"
            onChange={handleUpdateChange}
            value={text.price}
          />
          <FormHelperText>You can change Price.</FormHelperText>
          <FormLabel>Title</FormLabel>
          <Input type="text" onChange={handleUpdateChange} value={text.title} />
          <FormHelperText>Change title here of Product.</FormHelperText>
        </FormControl>
        <Button color={"pink"}>Update Data please</Button>
        <br />
        <br />
        <br />
      </Box>
    </div>
  );
};

export default AdminUpdate;
