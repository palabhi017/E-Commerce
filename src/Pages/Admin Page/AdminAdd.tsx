import React from "react";
import AdminNavbar from "./AdminNavbar";
import {
  FormLabel,
  Box,
  Heading,
  Button,
  Input,
  Center,
  FormControl,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postAdminData } from "../../Redux/Admin/admin.action";
// import "../../CSS/AdminLoginPage.css";
import { useNavigate } from "react-router";
import { Product } from "../../utils/types";
const initialState = {
  title: "",
  image: "",
  
  price: 0,
  rating: "3.5",
  reviews: "",
  category: "",
  tag: "",
};

const AdminAdd = () => {
  const [val, setVal] = React.useState<Product>(initialState);
  const dispatch = useDispatch();
  const handleToast = useToast();
  const navigate = useNavigate();
  const handleChange = (e:any) => {
    const { name, value} = e.target;
    if(e.target.name==="image"){
     if(e.target.files){
      const file = e.target.files[0]
      const reader= new FileReader() 

      reader.onload=()=>{
           setVal({ ...val, [name]: reader.result });
          
      }
      reader.readAsDataURL(file)
     }
     
    }else{
      
      setVal({ ...val, [name]: value });
    }
   
  };

  const addProduct = () => {
    if (
      val.title &&
      val.image &&

      val.price &&
      val.rating &&
      val.reviews &&
      val.category &&
      val.tag
    ) {
      dispatch(postAdminData(val));
      setVal(initialState);
      handleToast({
        title: "Data SuccessFull Added.",
        description: "Data Added Successfull.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/AdminDashboard");
    } else {
      handleToast({
        title: "input dont fill .",
        description: "Please fill all the data.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <AdminNavbar />
      <Box width="80%" margin="auto" p={4}>
        <Heading margin="10px">
          <Center
            fontSize={{ base: "10px", sm: "18px", md: "20px", lg: "25px" }}
          >
            ADD PRODUCTS
          </Center>
        </Heading>
        <FormControl
          shadow="xl"
          width="60%"
          margin="auto"
          p={10}
          marginBottom="20px"
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
            value={val.title}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Image
          </FormLabel>
          <Input
            type="file"
            marginBottom="10px"
            placeholder="Product Image"
            name="image"
            
            onChange={handleChange}
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
            value={val.price}
            onChange={handleChange}
          />

          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Reviews
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product Reviews"
            name="reviews"
            value={val.reviews}
            onChange={handleChange}
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
            value={val.category}
            onChange={handleChange}
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
            value={val.tag}
            onChange={handleChange}
          />
        </FormControl>
        <Center>
          <Button color="white" bg="pink.400" onClick={addProduct}>
            ADD PRODUCT
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default AdminAdd;
