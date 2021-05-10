import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image } from "rebass";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Header = (): JSX.Element => {
  const checkLogin = true;

  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.setItem("token", "false");
    console.log("HAHAHHA");
  };
  return (
    <Flex px={2} color="white" bg="green" alignItems="center">
      <Image
        sx={{ width: 48, height: 48, borderRadius: 9999 }}
      />
      <Text p={2} fontWeight="bold">
        <Link to="/">Home</Link>
      </Text>
      <Box mx="auto" />
      <Link to="/fdf">Profile</Link>
      {token !== "true" ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/logout">
          <a href="" onClick={logout}>
            LOGOUT
          </a>
        </Link>
      )}
    </Flex>
  );
};
