import React from "react";
import { Avatar } from "@chakra-ui/react";
import {
  MenuButton,
  MenuList,
  Menu,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "../Redux/Auth/auth.types";

const Avatars = ({ name }:{name:string}) => {
  const dispatch = useDispatch();
  const handlelogout = () => {
    localStorage.removeItem("user")
    dispatch({ type: AUTH_LOGOUT });
  };

  return (
    <>
     <Menu> 
      <MenuButton >
        <Avatar name={name} src="" size={{base:"sm",md:"md",lg:"md"}}/>
      </MenuButton>

      <MenuList>
      <Link to="/" onClick={() => handlelogout()}> <Button w="80%" h="45px">
          
            Logout
          
        </Button></Link>

        <Link to="/order"><Button mt="5px" w="80%" h="45px">
          My Orders
        </Button></Link>
      </MenuList>
      </Menu>
    </>
  );
};

export default Avatars;
