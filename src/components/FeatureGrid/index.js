import React from "react";

import {
  CurrencyCircleDollar,
  ClipboardText,
  Clock,
  Handshake,
  Shield,
  Target,
} from "phosphor-react";
import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import FeatureCell from "./FeatureCell";

const features = [
  {
    icon: <Target />,
    heading: "Доступность",
    text: "Любой человек может заработать выполняя простые задания.",
  },
  {
    icon: <CurrencyCircleDollar />,
    heading: "Выплаты",
    text: "Быстрые и прозрачные выплаты за выполненные заданий.",
  },
  {
    icon: <ClipboardText />,
    heading: "Разнообразие заданий",
    text: "Большой выбор заданий от различных компаний, как Google и FaceBook.",
  },
  {
    icon: <Shield />,
    heading: "Безопасность",
    text: "Все задания проверяются на честность и надежность.",
  },
  {
    icon: <Handshake />,
    heading: "Поддержка",
    text: "Наша команда поддержки всегда готова помочь вам.",
  },
  {
    icon: <Clock />,
    heading: "Гибкий график работы",
    text: "Работайте только в удобное для вас время.",
  },
];

function FeatureGrid() {
  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "3rem", md: "6.5rem" }}
    >
      <VStack spacing={{ base: "3rem", md: "7.5rem" }}>
        {/* Heading */}
        <VStack
          spacing="1rem"
          alignItems={{ base: "start", md: "center" }}
          textAlign={{ base: "start", md: "center" }}
        >
          <Heading as="h1" size="h1">
            Почему выбирают EasyCart?
          </Heading>
          <Text lineHeight="1.5" maxWidth="600px">
            EasyCart - ваш ключ к простому и надежному заработку.
            Присоединяйтесь сегодня и начните зарабатывать уже завтра!
          </Text>
        </VStack>
        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: "3rem", md: "5rem", xl: "5rem" }}
          maxW="57rem"
        >
          {features.map((feature, index) => (
            <FeatureCell key={`feature-${index}`} {...feature} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default FeatureGrid;
