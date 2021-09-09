import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Description from "../components/Descriptions";
import Header from "../components/Header";
import Underscore from "../components/Underscore/Underscore";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Description />
      <Underscore />
    </Flex>
  )
}
