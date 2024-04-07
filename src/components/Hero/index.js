import React from "react";

import {
  Box,
  Button,
  Circle,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import HoverBadge from "components/HoverBadge";
import Parallax from "components/Parallax";
import { Link, NavLink } from "react-router-dom";


function Hero() {
  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <Stack
          direction={{ base: "column", xl: "row" }}
          justifyContent={{ base: "start", md: "center", xl: "space-between" }}
          alignItems={{ base: "center", xl: "end" }}
          spacing={{ base: "3rem", xl: "7rem" }}
        >
          {/* Text */}
          <VStack
            alignItems={{ base: "start", md: "center", xl: "start" }}
            textAlign={{ base: "start", md: "center", xl: "start" }}
            spacing="3rem"
          >
            <VStack spacing="1rem">
              <Heading as="h1" size="h2" color="white">
                EasyCart: Простой способ заработать
              </Heading>
              <Text color="white" lineHeight="1.5">
                Ищете дополнительный источник дохода без особых навыков и
                большой траты времени? EasyCart предоставляет уникальную
                возможность заработать, выполняя простые задания.
              </Text>
            </VStack>
            <Wrap spacing="1.875rem">
              <WrapItem>
               <Button as={NavLink} to="/signup" colorScheme="blue">Начать сейчас</Button>
         
              </WrapItem>

              <WrapItem>
                <Button as={NavLink} to="/signin" variant="outline" colorScheme="white">
                  Войти
                </Button>
              </WrapItem>
            </Wrap>
          </VStack>
          {/* Image */}
          <Box w="100%" maxW="543px" p={{ base: "1rem", md: "0" }}>
            <Box position="relative">
              <Image
                src="assets/pexels-ruslan-burlaka-140945.jpg"
                alt="Hero image"
                borderRadius="12px"
              />
              <HoverBadge position="absolute" right="-1rem" top="-1rem">
                <Circle size="6px" bg="red" />
                <Text>Working</Text>
              </HoverBadge>
              {/* <Parallax position="absolute" left="-1rem" bottom="-2.5rem">
                <Image
                  src="assets/images/hero/hero-image-small.png"
                  maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                  shadow="2xl"
                  alt="Hero image"
                />
              </Parallax> */}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
