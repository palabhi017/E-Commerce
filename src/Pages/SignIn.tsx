import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Image,
  Icon,
  IconProps,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux";
import { postUserData } from "../Redux/Auth/auth.action";
import { JSX } from "react/jsx-runtime";

const avatars = [
  {
    name: "Abhishek Pal",
    url: "https://avatars.githubusercontent.com/u/112685224?v=4",
  },
  {
    name: "Utkarsh Singhal",
    url: "https://user-images.githubusercontent.com/106021674/220339351-b4733921-29aa-412f-b51c-8595c1164b28.jpg",
  },
  {
    name: "Rahul Mishra",
    url: "https://user-images.githubusercontent.com/106021674/220338708-8b65433f-4993-43f8-babb-8db40f5d4710.jpeg",
  },
  {
    name: "Rahul Dudka",
    url: "https://avatars.githubusercontent.com/u/90616584?v=4",
  },
];



export default function JoinOurTeam() {
 
 
  const dispatch = useDispatch();
  const toast = useToast()
  const navigate = useNavigate();

  const SignupSchema = Yup.object({
    name:Yup.string().min(2).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
  });

  const {values,errors,touched,handleChange,handleSubmit} = useFormik({
    initialValues: {name:"",email:'',password:''},
    validationSchema: SignupSchema,
    onSubmit:(values)=>{
       handleSignup(values.name,values.email,values.password)
    }
  })
  

  const handleSignup = async (name: string,email: string,password: string) => {
  
      const user = {
        name,
        email,
        password,
        cart: [],
        order: [],
      };
      dispatch(postUserData(user));
      navigate("/login");
      toast({
        position: "top",
        title: "Signup Successful",
        description: "You have successfully signup",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    
  };

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Welcome{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              Guest
            </Text>{" "}
            In Signup Page
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              <Image
                style={{
                  objectFit: "cover",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                src="https://avatars.githubusercontent.com/u/98648448?v=4"
              />
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Greatest Quality
              <br></br>
              Lowest Price🤫
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}></Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Fullname"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={handleChange}
                name="name"
                value={values.name}
              />
              {errors.name && touched.name &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.name}</Text>} 

              <Input
                placeholder="Email Address"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={handleChange}
                name="email"
                value={values.email}
              />
              {errors.email && touched.email &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.email}</Text>} 

              <Input
                placeholder="Enter Password"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={handleChange}
                name="password"
                value={values.password}
              />
              {errors.password && touched.password &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.password}</Text>} 

            </Stack>
            <Text>{""}</Text>
            <Button
              disabled={true}
              fontFamily={"heading"}
              mt={8}
              type="submit"
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              onClick={()=>handleSubmit()}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)", display: "none" }}
      />
    </Box>
  );
}

export const Blur = (props: JSX.IntrinsicAttributes & Omit<React.SVGProps<SVGSVGElement>, "translate" | "as" | keyof IconProps> & { htmlTranslate?: "yes" | "no" | undefined; } & IconProps & { as?: "svg" | undefined; }) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
