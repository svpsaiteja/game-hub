import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const invalidRoute = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading size={"lg"}>Oops</Heading>
        <Text>
          {invalidRoute ? "This page does not exist." : "Something went wrong"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
