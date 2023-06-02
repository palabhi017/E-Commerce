import React from "react";
import { Box, Center, Heading, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  
  Button,
} from "@chakra-ui/react";


interface Texts{
  title?:string,
  price?:number
}
const AdminUpdate = ({temp}:any) => {
  const [text, textVal] = React.useState<Texts>({});

  // const handleUpdateChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   const { name, value } = e.target;

  //   textVal({ ...text, [name]: value });
  // };

  return (
    <Box width="100%" h="100%">
    <Heading margin="10px">
      <Center
        fontSize={{ base: "10px", sm: "18px", md: "20px", lg: "25px" }}
      >
        EDIT PRODUCT
      </Center>
    </Heading>
    <FormControl
      shadow="xl"
      width="100%"
      margin="auto"
      p={10}
      
    >
      <FormLabel
        fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
        margin="-1px"
      >
        Title
      </FormLabel>
      <Input
        type="url"
        marginBottom="10px"
        placeholder="Product title"
        name="title"
        // value={}
        // onChange={handleChange}
      />
      <FormLabel
        fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
        margin="-1px"
      >
        Image
      </FormLabel>
      <Input
        type="url"
        marginBottom="10px"
        placeholder="Product Image"
        name="image"
        // value={val.image}
        // onChange={handleChange}
      />
     
      <FormLabel
        fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
        margin="-1px"
      >
        ₹Price
      </FormLabel>
      <Input
        type="number"
        marginBottom="10px"
        placeholder="Product Price"
        name="price"
        // value={val.price}
        // onChange={handleChange}
      />

      
      <FormLabel
        fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
        margin="-1px"
      >
        Category
      </FormLabel>
      <Input
        type="text"
        marginBottom="10px"
        placeholder="Product Category"
        name="category"
        // value={val.category}
        // onChange={handleChange}
      />
      <FormLabel
        fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
        margin="-1px"
      >
        Tag
      </FormLabel>
      <Input
        type="text"
        marginBottom="10px"
        placeholder="tag"
        name="tag"
        // value={val.tag}
        // onChange={handleChange}
      />
       <Center>
      <Button color="white" bg="blue.400">
        EDIT PRODUCT
      </Button>
      <Button color="white" bg="tomato" ml="10px" onClick={()=> temp(false)}>
        CANCEL
      </Button>
    </Center>
    </FormControl>
   
  </Box>
  );
};

export default AdminUpdate;
