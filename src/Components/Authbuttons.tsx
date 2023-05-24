import React from "react";
import {
  MenuButton,
  MenuList,
  MenuGroup,
  VStack,
  Text,
  
  Flex,
  Button,
  Menu,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
const Authbuttons = () => {
  return (
    
      <Menu>
      <MenuButton >
       
      
      <Flex direction="column" w={{base:"30px",md:"40px",lg:'80px'}} alignItems="center">
      <BsPerson fontSize="30px" />
  
             <Text display={{base:"none",md:"none",lg:"block"}}>Profile</Text>
                </Flex>
      </MenuButton>
      <MenuList pb="10px" >
        <MenuGroup title="Hello User" fontSize="19px" textAlign="left">
          <VStack>
            <Text fontSize="13px" textAlign="left">
              To access your Meesho account
            </Text>

            <Link to="/login" style={{width:"100%"}}> <Button w="80%" h="45px">
               Login
            </Button></Link>
            <Link to="/Admin" style={{width:"100%"}}><Button w="80%" h="45px">
              Admin login
            </Button></Link>
            <Link to="/signin" style={{width:"100%"}}>  <Button w="80%" h="45px" bg="#F43397" color="#fff">
              Signup{" "}
            </Button></Link>
          </VStack>
        </MenuGroup>
      </MenuList>
      </Menu>
    
  );
};

export default Authbuttons;
