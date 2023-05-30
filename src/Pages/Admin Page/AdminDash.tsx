import React from "react";
import AdminNavbar from "./AdminNavbar";
import { useDispatch } from "react-redux";
import {
  deleteData,
  FilterData,
  getAdminData,
} from "../../Redux/Admin/admin.action";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
 
  Divider,
  Button,
  Flex,
  Box,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
// import "../../CSS/AdminLoginPage.css";
import { Product } from "../../utils/types";
import { useAppSelector } from "../../Redux/store";
import { PRODUCTS_PAGE } from "../../Redux/Products/product.type";
import Procard from "./Procard";

const AdminDash = () => {
  const [total, setTotal] = React.useState<number>(0);
  const Toast = useToast();
  const state = useAppSelector((store) => store.adminReducer);
  const val = state.data.data;
  const load = useAppSelector((state) => state.productReducer.isLoading);
  const activePage = useAppSelector((state) => state.productReducer.currPage);
  const totalPages = Math.ceil(val?.length/10)
  
  const dispatch = useDispatch();
  
  // const handleUpdate = (_id, _price:number, _title:string) => {};

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

  const handleSelectData = async (par:string) => {
    dispatch(FilterData(par));
    Toast({
      position: "top-right",
      description: `${par} Data You Can See`,
      title: `${par} Data `,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const ToTalData = () => {
    if (state.data.data) {
      setTotal(val.reduce((acc: number, el: { price: any; }) => acc + Number(el.price), 0));
    } else {
      setTotal(0);
    }
  };

  setTimeout(() => {
    ToTalData();
  }, 100);

  React.useEffect(() => {
    dispatch(getAdminData());
    dispatch({type:PRODUCTS_PAGE,payload:1})

    ToTalData();
  }, []);
  
  return (
    <div>
      <AdminNavbar />
      <Divider />
      <Divider />
      <Divider />
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
            <Button
              backgroundColor="rgb(244, 51, 151)"
             
            >
              Total Products :
              {state.data.data && state.data.data.length
                ? state.data.data.length
                : 0}
            </Button>
            <Menu>
              <MenuButton
                px={9}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "rgb(153, 153, 153).400" }}
                _expanded={{ bg: "rgb(153, 153, 153).400" }}
                _focus={{ boxShadow: "outline" }}
               
              >
                Category <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem
                 
                  onClick={() => handleSelectData("men")}
                >
                  Men
                </MenuItem>
                <MenuItem
                 
                  onClick={() => handleSelectData("women")}
                >
                  Women
                </MenuItem>
                <MenuDivider />
                <MenuItem
                 
                  onClick={() => handleSelectData("Beauty & Health")}
                >
                  {" "}
                  Cosmatics
                </MenuItem>
                <MenuItem>
                  Jewellery and Accessories
                </MenuItem>
                <MenuItem>
                  FootWear
                </MenuItem>
              </MenuList>
            </Menu>
            <Button
             
              backgroundColor="rgb(244, 51, 151)"
            >
              Total Inventory : ₹{total}
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "80%",
          paddingBottom:"100px",
          margin: "auto",
          gap: "30px",
          border: "14px",
        }}
      >
        {state.data.data &&
          state.data.data.reverse().filter((_: any,index: number)=> {return (
            index >= 10* (activePage-1) && 
            index < 10 * activePage
          )}).map((el:Product) => <Procard {...el}/>)}
      </Box>
      {!load? <Flex w="80px" m="auto"  mt="30px" gap="3px" mb="10px">
        <Button isDisabled={activePage===1} bgColor={"teal.500"} color="white" fontSize={"20px"} fontWeight={"bold"} onClick={()=> dispatch({type:PRODUCTS_PAGE,payload:activePage-1})}>
          {"<"}
        </Button>
        <Button color="teal.500">{activePage}</Button>
        <Button isDisabled={activePage===totalPages} bgColor={"teal.500"} color="white" fontSize={"20px"} fontWeight={"bold"} onClick={()=> dispatch({type:PRODUCTS_PAGE,payload:activePage+1})}>{">"}</Button>
      </Flex> :""}
    </div>
  );
};

export default AdminDash;
