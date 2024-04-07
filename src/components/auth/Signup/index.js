import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";

const SignupForm = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={10} p={6} marginBottom="12">
      {userLoggedIn && <Navigate to={"/work"} replace={true} />}
      <Heading as="h2" mb={4} textAlign="center">
        Регистрация
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl id="username" mb={4}>
          <FormLabel>Имя пользователя</FormLabel>
          <Input
            type="text"
            name="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Введите имя пользователя"
            required
          />
        </FormControl>

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
            disabled={isRegistering}
            type="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Введите пароль"
            required
          />
        </FormControl>

        <FormControl id="confirmPassword" mb={4}>
          <FormLabel>Подтверждение пароля</FormLabel>
          <Input
            disabled={isRegistering}
            type="password"
            name="confirmPassword"
            autoComplete="off"
            value={confirmPassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
            placeholder="Подтвердите пароль"
            required
          />
        </FormControl>

        <Button
          type="submit"
          disabled={isRegistering}
          colorScheme="blue"
          width="100%"
        >
          {isRegistering ? "Идет регистрация..." : "Зарегистрироваться"}
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
