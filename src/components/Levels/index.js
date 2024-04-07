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
import { NavLink } from "react-router-dom";

function LevelsBlock() {
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
                Уровни
              </Heading>
              <br /> <br/>
              <Heading
                color="white"
                lineHeight="1.5"
                size="h3"
                marginBottom="20px"
              >
                Новичок (Уровень 1)
                <br /> <br />
                Начинающие пользователи, которые только начинают свой путь на
                платформе EasyCart. Этот уровень предоставляет доступ к базовым
                заданиям и служит стартовой точкой для новичков. Уровень создан
                для введения пользователей в систему и предоставления базовых
                возможностей заработка, стимулируя их активность и интерес к
                платформе.
                <br /> <br />
                - Новички получают доступ к базовым заданиям. <br />
                - Ограниченное количество заданий в начале. <br />
                - Более низкие ставки оплаты за выполненные задания. <br />
              </Heading>
              <br /> <br/>
              <Heading
                color="white"
                lineHeight="1.5"
                size="h3"
                marginBottom="20px"
              >
                Опытный (Уровень 2)
                <br /> <br />
                Пользователи с определенным опытом на платформе, которые
                демонстрируют активность и качество выполненных заданий. На этом
                уровне предоставляется доступ к более разнообразным и сложным
                заданиям, а также увеличивается количество доступных заданий.
                Уровень стимулирует пользователей улучшать свои навыки, активно
                работать и развиваться на платформе, получая доступ к более
                выгодным и разнообразным заданиям.
                <br/> <br/>
                - Опытные пользователи имеют доступ к более разнообразным и сложным заданиям. <br/>
                - Увеличенное количество доступных заданий. <br/>
                - Повышенные ставки оплаты. <br/>
              </Heading>
              <br /> <br/>
              <Heading
                color="white"
                lineHeight="1.5"
                size="h3"
                marginBottom="20px"
              >
                Эксперт (Уровень 3)
                <br /> <br />
                Опытные и надежные пользователи, которые продемонстрировали
                высокий уровень качества выполненных заданий и активную работу
                на платформе. Этот уровень предоставляет доступ к самым сложным
                и высокооплачиваемым заданиям, а также предлагает самые высокие
                ставки оплаты. Уровень поощряет пользователей поддерживать
                высокие стандарты качества, мотивируя их работать наиболее
                эффективно и предоставлять лучший возможный результат, что в
                конечном итоге способствует улучшению репутации и заработка на
                платформе.
                <br/> <br/>
                - Эксперты имеют доступ к самым сложным и высокооплачиваемым заданиям. <br/>
                - Наивысшее количество доступных заданий. <br/>
                - Самые высокие ставки оплаты за выполненные задания. <br/>
              </Heading>
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
        </Stack>
      </Container>
    </Box>
  );
}

export default LevelsBlock;
