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
import { useAppSelector } from "../../Redux/store";
import { PRODUCTS_PAGE } from "../../Redux/Products/product.type";
import Procard from "./Procard";
import AdminUpdate from "./AdminUpdate";

const AdminDash = () => {
  const Toast = useToast();
  const state:any = useAppSelector((store) => store.adminReducer);
  const val = state.data;
  const load = useAppSelector((state) => state.productReducer.isLoading);
  const activePage = useAppSelector((state) => state.productReducer.currPage);
  const totalPages = Math.ceil(val?.length / 10);
  const [updateMo,setUpdateMo]=useState<boolean>(false)
  const [proD,setProD]=useState({})
  const [temp,setTemp]=useState({})
  const dispatch = useDispatch();

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
  const handleUpdate = async (id:number,obj: string) => {
    
  // setTemp(obj)
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
      {updateMo? <Box w="40vw" h="80vh" left="30vw" top="30px" pos="fixed" zIndex={1} background={"white"} border="1px solid pink">

<AdminUpdate temp={setUpdateMo} />
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
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "80%",
          paddingBottom: "100px",
          margin: "auto",
          gap: "30px",
          border: "14px",
        }}
      >
        {state.data &&
          state.data
            .reverse()
            .filter((_: any, index: number) => {
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
