import React,{useEffect, useState} from "react";
import AdminNavbar from "./AdminNavbar";
import { useDispatch } from "react-redux";
import {
  deleteData,
  FilterData,
  getAdminData,
  updateData,
} from "../../Redux/Admin/admin.action";

import {
  Divider,
  Button,
  Flex,
  Box,
  ButtonGroup,
  Select,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { Product } from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { PRODUCTS_PAGE } from "../../Redux/Products/product.type";
import Procard from "./Procard";
import AdminUpdate from "./AdminUpdate";
import base from "@emotion/styled/types/base";

const AdminDash = () => {
  const Toast = useToast();
  const state:any = useAppSelector((store) => store.adminReducer);
  const val = state.data;
  const load = useAppSelector((state) => state.productReducer.isLoading);
  const activePage = useAppSelector((state) => state.productReducer.currPage);
  const totalPages = Math.ceil(val?.length / 10);
  const [updateMo,setUpdateMo]=useState<boolean>(false)
  // const [proD,setProD]=useState({})
  const [temp,setTemp]=useState({})
  const dispatch = useAppDispatch();

  const handleDelete = (e: number) => {
    dispatch(deleteData(e));

    Toast({
      position: "top",
      description: "Data Successfully Deleted",
      title: "Data Deleted 😵😵",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleSelectData = async (par: string) => {
    dispatch(FilterData(par));
  
  };
  const handleUpdate =(id:number,obj: Product) => {
    
  setTemp(obj)
  setUpdateMo(true)
  };

  useEffect(() => {
    dispatch(getAdminData());
    dispatch({ type: PRODUCTS_PAGE, payload: 1 });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <Divider />
      <Divider />
      <Divider />
      {updateMo? <Box w="40vw" h="80vh" left="30vw" top="30px" borderRadius={10} pos="fixed" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" zIndex={1} background={"white"} border="1px solid pink">

<AdminUpdate temp1={setUpdateMo} obj={temp} />
</Box>:""}
      
      <Box
        style={{
          height: "20px",
          width: "30%",
          margin: "auto",
        }}
      >
        <Flex
          style={{
            gap: "90px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <ButtonGroup>
            <Button backgroundColor="pink.300" color="white">
              Total Products :
              {state.data && state.data.length ? state.data.length : 0}
            </Button>
          </ButtonGroup>
          <Select
            onChange={(e) => handleSelectData(e.target.value)}
            placeholder="category"
          >
            
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="Beauty & Health">Beauty & Health</option>
          </Select>
        </Flex>
      </Box>
      <br />
      <br />

      <Box
      
          display="grid"
          gridTemplateColumns= {{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}
          width="80%"
          paddingBottom="100px"
          margin="auto"
          gap="30px"
          border= "14px"
        
      >
        {state.data &&
          state.data.filter((_: any, index: number) => {
              return index >= 10 * (activePage - 1) && index < 10 * activePage;
            })
            .map((el: Product) => (
              <Procard key={el.id} obj={el} hanDel={handleDelete} hanUp={handleUpdate} />
            ))}
      </Box>
      {!load ? (
        <Flex w="80px" m="auto" mt="30px" gap="3px" mb="10px">
          <Button
            isDisabled={activePage === 1}
            bgColor={"teal.500"}
            color="white"
            fontSize={"20px"}
            fontWeight={"bold"}
            onClick={() =>
              dispatch({ type: PRODUCTS_PAGE, payload: activePage - 1 })
            }
          >
            {"<"}
          </Button>
          <Button color="teal.500">{activePage}</Button>
          <Button
            isDisabled={activePage === totalPages}
            bgColor={"teal.500"}
            color="white"
            fontSize={"20px"}
            fontWeight={"bold"}
            onClick={() =>
              dispatch({ type: PRODUCTS_PAGE, payload: activePage + 1 })
            }
          >
            {">"}
          </Button>
        </Flex>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminDash;
