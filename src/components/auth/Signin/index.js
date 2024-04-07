import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth";
import { useAuth } from "../../../contexts/authContext";
import { Navigate } from "react-router-dom";

const SigninForm = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((error) => {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      });
    }
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={10} p={6} marginBottom="12">
      {userLoggedIn && <Navigate to="/work" replace={true} />}
      <Heading as="h2" mb={4} textAlign="center">
        Вход
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Введите email"
            required
          />
        </FormControl>

        <FormControl id="password" mb={4}>
          <FormLabel>Пароль</FormLabel>
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Введите пароль"
            required
          />
        </FormControl>

        <Button
          type="submit"
          disabled={isSigningIn}
          colorScheme="blue"
          width="100%"
        >
          {isSigningIn ? "Заходит..." : "Войти"}
        </Button>
        <Button
          mt={4}
          onClick={onGoogleSignIn}
          disabled={isSigningIn}
          colorScheme="red"
          width="100%"
        >
          Войти через Google
        </Button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </Box>
  );
};

export default SigninForm;
