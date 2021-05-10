import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type DataInfo = {
  userName: string;
  password: string;
};

export const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataInfo>();

  const keyUserName = "userName";
  const keyPassword = "password";
  let history = useHistory();

  const loginAPI = (data: DataInfo) => {
    fetch("http://localhost:9000/testAPI/login")
      .then((res) => res.text())
      .then((res) => {
        const temp = JSON.parse(res) as DataInfo;
        if (
          data.userName === temp.userName &&
          data.password === temp.password
        ) {
          localStorage.setItem("token", "true");
          history.replace("/");
          alert("LOGIN Success");
        } else alert("LOGIN FAIL");
      });
  };

  const setTimeOut = () => {
    let time = 60 * 1000;
    setInterval(() => {
      localStorage.removeItem("token");
    }, time);
  };

  useEffect(() => {
    setTimeOut();
  }, []);

  const userNameProps = {
    type: "text",
    ...register(keyUserName, { required: true }),
  };

  const passwordProps = {
    type: "password",
    ...register(keyPassword),
  };

  return (
    <form onSubmit={handleSubmit(loginAPI)}>
      User name
      <input {...userNameProps} />
      {errors.userName?.type === "required" && (
        <div>You must enter your name.</div>
      )}
      Pass word
      <input {...passwordProps} />
      <button>LOGIN</button>
    </form>
  );
};
