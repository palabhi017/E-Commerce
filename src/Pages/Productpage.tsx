
import React, { useEffect,useRef } from "react";
import { Box, Grid, HStack, Button,Flex } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
// import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/product.action";
import Card from "../Components/Card";
import Filter from "../Components/Filter";
import {
  Drawer,
  DrawerBody,
  Spinner,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
// import { Link } from "react-router-dom";
import { useSearchParams, } from "react-router-dom";
import { PRODUCTS_PAGE, } from "../Redux/Products/product.type";
import Sort from "../Components/Sort";
import { Product } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../Redux/store";
const Productpage = () => {
  const products = useAppSelector((state) => state.productReducer.Products);
  const activePage = useAppSelector((state) => state.productReducer.currPage);
  const protypes = useAppSelector((state) => state.productReducer.protypes);
  const load = useAppSelector((state) => state.productReducer.isLoading);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)

  // const [sortorfilter,setSortorFilter] = useState(false)
  const [searchParams] = useSearchParams()
  const totalPages = Math.ceil(products?.length/10)
 const dispatch = useAppDispatch()
 

    
   const handlesort=()=>{
    if(products.length>0){
      const getProductsParam = {
        params: {
            category: products && products[0].category,
            tag:searchParams.getAll("filter"),
            _sort: "price",
            _order: searchParams.get("sort"),
           
        }
    }
    
    dispatch(getProducts(getProductsParam))
    dispatch({type:PRODUCTS_PAGE,payload:1})
    
    }
  }
  useEffect(()=>{
    let getCate = JSON.parse(localStorage.getItem("cate")||"")
    dispatch(getProducts(getCate))

  },[protypes])
  useEffect(()=>{
  
    if(searchParams.get("sort")|| searchParams.getAll("filter")){
      handlesort()
      
    }
   },[searchParams])

  
  

  return (
    <>
    <Box w={{base:"100%",md:"30%"}} borderBottom="1px solid #999" borderRadius={"3px"} display={{base:"block",md:"block",lg:"none"}}>
            <HStack h="50px" w="100%" >
              <Box  ref={btnRef} color='teal' onClick={onOpen} w="50%" borderRight={"1px solid black"} fontSize="20px" fontWeight={"500"}>Sort</Box>
              <Box  ref={btnRef} color='teal' onClick={onOpen} w="50%" fontSize="20px" fontWeight={"500"}>Filter</Box>
            </HStack>
           
 
  
      {/* <Button ref={btnRef} color='teal' onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          

          <DrawerBody>
            <Sort/>
          <Filter  />
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
  
        </Box>
      <HStack alignItems="top">
        
        <Box p="30px 10px" w="25%" display={{base:"none",md:"none",lg:"block"}}>
          <Sort/>
          <Filter />

        </Box> 
        <Box pt="30px" w={{base:"100%",md:"100%",lg:"75%"}}>
          {load? <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size={{base:"xl",md:"xl",lg:"xl"}}
/> :
          <Grid templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} pl={{base:"0px",md:"10px",lg:"20px"}} gap={{base:"0px",md:"10px",lg:"20px"}}>
            {products.length && products.filter((_: any,index: number)=> {return (
              index >= 10* (activePage-1) && 
              index < 10 * activePage
            )}).map((e:Product) => <Card key={e.id} {...e} />)}
          </Grid> }
          {!load? <Flex w="80px" m="auto"  mt="30px" gap="3px" mb="10px">
        <Button isDisabled={activePage===1} bgColor={"teal.500"} color="white" fontSize={"20px"} fontWeight={"bold"} onClick={()=> dispatch({type:PRODUCTS_PAGE,payload:activePage-1})}>
          {"<"}
        </Button>
        <Button color="teal.500">{activePage}</Button>
        <Button isDisabled={activePage===totalPages} bgColor={"teal.500"} color="white" fontSize={"20px"} fontWeight={"bold"} onClick={()=> dispatch({type:PRODUCTS_PAGE,payload:activePage+1})}>{">"}</Button>
      </Flex> :""}
         

        </Box>
      </HStack>
     
    </>
  );
};

export default Productpage;
