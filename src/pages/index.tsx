import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Description from "../components/Descriptions";
import Header from "../components/Header";
import Underscore from "../components/Underscore/Underscore";
import Slider from "../components/Slider"

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Description />
      <Underscore />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
