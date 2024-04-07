import React from "react";

import { EnvelopeSimple } from "phosphor-react";
import { Box, Circle, Container, Heading, VStack } from "@chakra-ui/react";

import DonateOverlay from "./DonateOverlay";
import Feature from "./Feature";
import HoverBadge from "components/HoverBadge";
import Parallax from "components/Parallax";

function FeatureImages() {
  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "3rem", md: "6.5rem" }}
      >
        <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
          <Feature
            heading="О Компании"
            text="EasyCart - это инновационная платформа для заработка, которая предоставляет удобные и простые задания для всех, кто желает получить дополнительный доход онлайн. Наша миссия - сделать процесс заработка доступным и прозрачным для каждого."
            imageSrc="assets/pexels-matheus-bertelli-17042847.jpg"
            imageAlt="Feature Image 2"
            reverse={true}
            to="/about"
          >
            <HoverBadge
              borderRadius="0.75rem"
              p="1rem"
              fontSize="32px"
              position="absolute"
              top="-1rem"
              right="-1rem"
            >
              <EnvelopeSimple />
              <Circle
                size="0.75rem"
                bg="blue.400"
                position="absolute"
                top="1rem"
                right="0.85rem"
                border="2px"
                borderColor="white"
              />
            </HoverBadge>
          </Feature>
          <Feature
            heading="Уровни"
            text="Уровни созданы для стимулирования развития и мотивации пользователей, предоставляя постепенный рост возможностей и заработка, а также поощряя активность и качество заданий."
            imageSrc="assets/pexels-burst-374831.jpg"
            imageAlt="Feature Image 1"
            to="/levels"
          >
            <Parallax position="absolute" top="-1rem" left="-1rem">
              <DonateOverlay />
            </Parallax>
          </Feature>
        </VStack>
      </Container>
    </Box>
  );
}

export default FeatureImages;
