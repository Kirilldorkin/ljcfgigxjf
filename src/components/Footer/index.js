import React from "react";

import {
  Box,
  Container,
  Divider,
  Heading,
  Link,
  Stack,
  Text,
  useToken,
} from "@chakra-ui/react";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Phone,
} from "phosphor-react";

import LogoBlack from "assets/EasyCart-dark.svg";

function Footer() {
  const [blue400] = useToken("colors", ["blue.400"]);

  return (
    <Box bg="gray.100">
      <Container maxW={{ base: "container.sm", xl: "container.xl" }} py="5rem">
        <Stack
          direction={{ base: "column", xl: "row" }}
          alignItems="start"
          spacing="3.75rem"
        >
          <Stack direction={{ base: "column", sm: "row" }} spacing="3.75rem">
            {/* Logo & Links */}
            <Stack direction="column" spacing="1.5rem">
              <Box py="0.25rem">
                <LogoBlack />
              </Box>
              <Text maxWidth="260px">
                Уникальная возможность заработка онлайн
              </Text>
              <Stack direction="row" spacing="1rem">
                <Link href="https://instagram.com/">
                  <InstagramLogo size={20} />
                </Link>
                <Link href="https://facebook.com/">
                  <FacebookLogo size={20} weight="fill" />
                </Link>
              </Stack>
            </Stack>
            {/* Contacts */}
            <Stack direction="column" spacing="1.5rem">
              <Heading as="h3" size="h3">
                Контактная информация
              </Heading>
              <Stack direction="row" spacing="0.5rem">
                <Phone size={24} color={blue400} />
                <Text>+7 (XXX) XXX-XX-XX</Text>
              </Stack>
              <Stack direction="row" spacing="0.5rem">
                <EnvelopeSimple size={24} color={blue400} />
                <Text>info@EasyCart.com</Text>
              </Stack>
            </Stack>
          </Stack>
          {/* Email form */}
          {/* <Stack
            direction="column"
            spacing="1.5rem"
            w="100%"
            maxW={{ base: "auto", xl: "517px" }}
          >
            <Heading as="h3" size="h3">
              Get in touch
            </Heading>
            <Input placeholder="Your name" bg="white" />
            <Input placeholder="Your email" bg="white" />
            <Textarea placeholder="Your message" bg="white" resize="none" />
            <Box>
              <Button colorScheme="blue">Send</Button>
            </Box>
          </Stack> */}
        </Stack>
      </Container>
      <Divider borderColor="gray.400" />
      <Container maxW="container.xl" py="1.25rem" textAlign="center">
        ©2024 EasyCart, All rights reserved
      </Container>
    </Box>
  );
}

export default Footer;
