
import Ordercard from "../Components/Ordercard";
import { Grid, Heading } from "@chakra-ui/react";
import { Orders as OR} from "../utils/types";
import { useAppSelector } from "../Redux/store";
const Orders = () => {
  const orders = useAppSelector((state) => state.Auth.currentUser.order);
  return (
    <>
      <Heading mt="20px" color="#161636" fontSize={"30px"}>Your Orders</Heading>
      <Grid
        w="90%"
        m="auto"
        h="auto"
        p="10px 40px"
        templateColumns={{base:"repeat(1,90%)",md:"repeat(2,50%)",lg:"repeat(3,20%)"}}
        gap="40px"

        mt="30px"
      >
        {orders && orders.map((e:OR) => <Ordercard key={Date.now()} {...e} />)}
      </Grid>
    </>
  );
};

export default Orders;
