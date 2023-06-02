import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'

import {Product} from "../../utils/types"

interface Prop{
  obj:Product,
  hanDel:(e:any)=>void
  hanUp:(id:any,obj:any)=>void
}
const Procard = ({obj,hanDel,hanUp}:Prop) => {
  const {id,title,image,category,price,rating,reviews,tag} = obj
  return (
    <>
   
    <Card maxW="sm" key={id} h="420px">
    <CardBody h="300px" >
      <Box>
        <Box  className="BeforeHover">
        
          
          <Image
           h="100px"
           // w="10"
           src={image}
           alt={title}
           margin="auto"
           className="BeforeHover"
          />
        </Box>
       
        <Stack mt="6" spacing="3">
        <Text>
          {category}
        </Text>
        <Text
          // fontSize={"xl"}
          style={{
            color: " rgb(153, 153, 153)",
            fontSize:"14px",
            fontWeight: "400",
            
          }}
         
          noOfLines={1}
        >
          {title}
        </Text>
        <Text
          fontWeight="700"
          color="rgb(51, 51, 51)"
          
        >
          <span >Price ₹</span>{" "}
          {price}
        </Text>

        <Text
          
          color="blue.600"
          // fontSize="2xl"
        >
          <span
            
            style={{ fontWeight: "700" }}
          >
            
          </span>{" "}
          {tag}
        </Text>
        <Flex
          style={{ gap: "20px", justifyContent: "space-evenly" }}
        >
          <Text
           
            color="blue.600"
            // fontSize="16px"
          >
            {reviews}
          </Text>

          <Button
            style={{ border: "18px 12px" }}
            bg={"rgb(244, 51, 151)"}
            className="btn_Hover"
           
          >
           
            <Text 
           
            color="#ffff"
            fontSize="14px"
            p="0"
            >
              {rating}
            </Text>
          </Button>
        </Flex>
      </Stack>
      </Box>
      {/* <br/>
      <br/> */}
      
    </CardBody>
    <Divider />
    <CardFooter >
      <ButtonGroup gap="20px" >
        <Button
          variant="solid"
          bg={"rgb(244, 51, 151)"}
          color={"#ffff"}
          className="btn_Hover"
          onClick={() => hanDel(id)}
         
          fontSize="14px"
        >
          Delete
        </Button>{" "}
        <Button
          variant="solid"
          bg={"rgb(244, 51, 151)"}
          color={"#ffff"}
          className="btn_Hover"
          fontSize="14px"
          onClick={()=> hanUp(id,obj)}
        >
          Update
        </Button>
      </ButtonGroup>
    </CardFooter>

  </Card>
  </>
  )
}

export default Procard