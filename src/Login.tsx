import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Link, Image } from "rebass";

export const Login = (): JSX.Element => {
  const checkLogin = true;

  const [check, setCheck] = useState(true);

  const login = () => {
    if (check) {
      alert("LOGIN SUCESS");
      setCheck(false);
    } else alert("LOGIN FAIL");
  };

  return (
    <form onSubmit={login}>
      User name
      <input type="text" />
      Pass word
      <input type="text" />
      <button>LOGIN</button>
    </form>
  );
};
