import React, { useState } from "react";
import { Box, Center, Heading, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  
  Button,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../Redux/store";
import { getAdminData, updateData } from "../../Redux/Admin/admin.action";



const AdminUpdate = ({temp1,obj}:any) => {
  const [title, setTitle] = useState<string>(obj.title);
  const [price, setPrice] = useState<string>(obj.price);
  const [image, setImage] = useState<string>(obj.image);
  const [category, setCategory] = useState<string>(obj.category);
  const [tag, setTag] = useState<string>(obj.tag);
  const dispatch = useAppDispatch();

 const handleupdate= async()=>{
  let newData={
    title,
    price,
    image,
    category,
    tag,
    reviews:obj.reviews
  }
 await dispatch(updateData(obj.id,newData))
 await dispatch(getAdminData());
 temp1(false)

 }

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
        value={title}
        onChange={(e)=> setTitle(e.target.value)}

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
        value={price}
        onChange={(e)=> setPrice(e.target.value)}

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
        value={category}
        onChange={(e)=> setCategory(e.target.value)}

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
        value={tag}
        onChange={(e)=> setTag(e.target.value)}
      />
       <Center>
      <Button color="white" bg="blue.400" onClick={()=> handleupdate()}>
        EDIT PRODUCT
      </Button>
      <Button color="white" bg="tomato" ml="10px" onClick={()=> temp1(false)}>
        CANCEL
      </Button>
    </Center>
    </FormControl>
   
  </Box>
  );
};

export default AdminUpdate;
