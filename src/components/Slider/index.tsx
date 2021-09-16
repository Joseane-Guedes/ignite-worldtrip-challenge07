import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore,{ A11y, Navigation, Pagination, Scrollbar,  Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay,Pagination,Navigation]);


interface SliderProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}


export default function Slider({continents}: SliderProps) {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={30} centeredSlides={true} autoplay={{
          "delay": 3000,
          "disableOnInteraction": false
        }} 
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log("slide change")}
        style={{ width: "100%", flex: "1" }}
      >

      {continents.map(continent => (
         <SwiperSlide key={continent.slug}>
         <Flex 
           w="100%"
           h="100%"
           align="center"
           justify="center"
           direction="column"
           bgImage={`url(${continent.image})`}
           bgPosition="100% 30%"
           bgRepeat="no-repeat"
           bgSize="cover"
           textAlign="center"
         >
           <Link href={`/continent/${continent.slug}`}>
             <a>
               <Heading
                 color="gray.50"
                 _hover={{ color: "yellow.300" }}
                 fontSize="3rem"
                 fontWeight="bold"
               >
                {continent.title}
               </Heading>
               <Text
                 fontWeight="bold"
                 color="gray.300"
                 fontSize={["0.8rem", "1xl", "2xl"]}
                 mt={["2", "4"]}

               >
                 {continent.summary}
               </Text>
             </a>
           </Link>
         </Flex>
       </SwiperSlide>
      ))}

       
      </Swiper>
    </Flex>
  );
}
