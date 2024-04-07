import React from "react";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function AboutBlock() {
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
                О Компании
              </Heading>
              <br /> <br />
              <Heading color="white" lineHeight="1.5" size="h3">
                EasyCart - это инновационная платформа для заработка, которая
                предоставляет удобные и простые задания для всех, кто желает
                получить дополнительный доход онлайн. Наша миссия - сделать
                процесс заработка доступным и прозрачным для каждого.
              </Heading>
              <br />
              <Heading color="white" lineHeight="1.5" size="h3">
                С момента своего основания, мы стремимся обеспечивать высокое
                качество услуг, предоставляя пользователям разнообразные и
                интересные задания от проверенных компаний различных отраслей.
                Наша команда постоянно работает над улучшением платформы, чтобы
                сделать процесс работы наиболее эффективным и приятным для наших
                пользователей.
              </Heading>
              <br />
              <Heading color="white" lineHeight="1.5" size="h3">
                EasyCart гордится своими принципами прозрачности, надежности и
                поддержки пользователей на каждом этапе их работы с нами. Мы
                стремимся создать сообщество, в котором каждый может расти,
                развиваться и успешно зарабатывать, выполняя задания, которые
                подходят именно ему.
              </Heading>
            </VStack>
            <Wrap spacing="1.875rem">
              <WrapItem>
                <Button as={NavLink} to="/signup" colorScheme="blue">
                  Начать сейчас
                </Button>
                =
              </WrapItem>

              <WrapItem>
                <Button as={NavLink} to="/signin" variant="outline" colorScheme="white">
                  Войти
                </Button>
              </WrapItem>
            </Wrap>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutBlock;
