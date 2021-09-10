import { Flex, Grid, Image, Icon } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from "react-icons/ri"
import Link from 'next/link';

export default function Header(){
    const { asPath } = useRouter();
    const notHomePage = asPath !== '/'

    return (
       <Flex
        bg="white"
        w="100%"
        as="header"
        mx="auto"
        px="1rem"
        h={["50px" , "100px"]}
        align="center"
        justify="center"
       >
           <Grid
           h="100%"
           mx="auto"
           w="100%"
           maxW="1168px"
           alignItems="center"
           templateColumns="repeat(3, 1fr)"
           justifyContent="center"
           >
             {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
            </a>
          </Link>
        )}
               
            <Image 
               w={["81px", "184px"]}
               src="/logo.svg"
               alt="Airplane"
               justifySelf="center"
               gridColumn="2"
               />
           </Grid>
       </Flex>
    )
}