import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import Description from "./Description";

export default function Descriptions() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <Description icon="drink" text="" />
    </GridItem>
    <GridItem>
      <Description icon="beach" text="" />
    </GridItem>
    <GridItem>
      <Description icon="tower" text="" />
    </GridItem>
    <GridItem>
      <Description icon="museum" text="" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <Description icon="earth" text="" />
      </GridItem>
    </Grid>
  )
}