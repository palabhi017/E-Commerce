import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useToast } from "@chakra-ui/react";
import adminback from "../../Images/adminback.jpg";
const initialState = {
  email: "",
  password: "",
};
interface Log {
  email: string;
  password: string;
  name?: string;
}
export default function LoginAdmin() {
  const [val, setVal] = React.useState<Log>(initialState);
  // const [text, setText] = React.useState(false);
  const navigate = useNavigate();
  const handleToast = useToast();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const handleSubmit = async () => {
    if (val.password === "abhishek" && val.email === "abhi@123.com") {
      navigate("/AdminDashboard");

      handleToast({
        position: "top-right",
        title: "Hello Admin Welcome back",
        description: "Now You can do your work.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      handleToast({
        position: "top-right",
        description: "Please Check your id and password",
        title: "Wrong Credential",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setVal(initialState);
  };

  return (
    <HStack backgroundImage={adminback} h="80vh">
      <Box w="50vw">
        <Heading
          color={"white"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", md: "3xl", lg: "6xl" }}
          fontFamily={" 'Lobster Two', cursive"}
        >
          Welcome Admin <br />
         
          <Text           
          color={"white"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}
          fontFamily={" 'Lobster Two', cursive"}>
          Sign in to your account
          </Text>
        </Heading>
      </Box>

      <Flex w="50vw" align={"center"} justify={"center"}>
        <Stack w="60%" py={12}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} borderRadius={"20px"}>
              <FormControl id="email">
                <FormLabel fontFamily={" 'Lobster Two', cursive"}>
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={val.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel fontFamily={" 'Lobster Two', cursive"}>
                  Password
                </FormLabel>
                <Input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={val.password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox fontFamily={" 'Lobster Two', cursive"}>
                    Remember me
                  </Checkbox>
                  <Link
                    color={"blue.400"}
                    fontFamily={" 'Lobster Two', cursive"}
                  >
                    Forgot password?
                  </Link>
                </Stack>

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  fontFamily={" 'Lobster Two', cursive"}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <ToastContainer />
    </HStack>
  );
}
