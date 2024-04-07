import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { Box, Button, Container, HStack, Link, Show } from "@chakra-ui/react";

import LogoWhite from "assets/EasyCart.svg";
import MobileNav from "./MobileNav";
import { useAuth } from "contexts/authContext";

function NavBar() {
  const [navLinks] = useState([
    {
      name: "О Компании",
      path: "/about",
    },
    {
      name: "Уровни",
      path: "/levels",
    },
  ]);

  const { userLoggedIn } = useAuth();

  return (
    <Box bg="gray.900">
      <Container maxW="container.xl" py="1.5rem">
        <HStack justifyContent="space-between" spacing="6rem">
          {/* Left links */}
          <HStack spacing="6rem">
            <Link as={NavLink} to="/">
              <LogoWhite />
            </Link>
            <Show above="lg">
              <HStack spacing="5.25rem">
                {navLinks.map((link) => {
                  return (
                    <Button
                      key={`nav${link.path}`}
                      as={NavLink}
                      to={link.path}
                      variant="link"
                      colorScheme="whiteAlpha"
                      color="white"
                    >
                      {link.name}
                    </Button>
                  );
                })}
              </HStack>
            </Show>
          </HStack>
          {/* Right Links */}
          {userLoggedIn ? (
            <Show above="lg">
              <HStack spacing="1.125rem">
                <Button
                  as={NavLink}
                  to="/profile"
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  color="white"
                >
                  Профиль
                </Button>
                <Button as={NavLink} to="/work" colorScheme="blue">
                  Задания
                </Button>
              </HStack>
            </Show>
          ) : (
            <Show above="lg">
              <HStack spacing="1.125rem">
                <Button
                  as={NavLink}
                  to="/signin"
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  color="white"
                >
                  Войти
                </Button>
                <Button as={NavLink} to="/signup" colorScheme="blue">
                  Начать сейчас
                </Button>
              </HStack>
            </Show>
          )}

          {/* Mobile menu */}
          <MobileNav links={navLinks} />
        </HStack>
      </Container>
    </Box>
  );
}

export default NavBar;
