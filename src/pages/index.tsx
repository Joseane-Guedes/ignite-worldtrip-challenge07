import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import Banner from "../components/Banner";
import Description from "../components/Descriptions";
import Header from "../components/Header";
import Underscore from "../components/Underscore/Underscore";
import Slider from "../components/Slider";
import { getPrismicClient } from "../services/prismic";


interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

interface HomeProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
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
        textShadow="1px 1px  #47585B"
        m="6"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "continent")]);

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url,
    };
  });

  return {
    props: {
      continents,
    },
    revalidate: 1800,
  };
};
