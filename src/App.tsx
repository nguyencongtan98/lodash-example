import React, { useEffect, useState } from "react";
import { Flex } from "rebass";
import "./App.css";
import { Header } from "./Header";
import { Product } from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./Login";
import { Dispatch, RootState } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

type ProductProps = {
  name: string;
  price: number;
  priceSale?: number;
  description: string;
  img: string;
};

const App = () => {
  const cookies = new Cookies();
  cookies.set("mycat", "Pacman", { path: "/" });

  const [data, setData] = useState<ProductProps[]>([
    {
      description: "",
      price: 0,
      name: "",
      img: "",
    },
  ]);

  const callAPI = () => {
    fetch("https://6098f90399011f001713fd6d.mockapi.io/getProduct/product/:1")
      .then((res) => res.text())
      .then((res) => {
        setData(JSON.parse(res));
      });
  };

  const countState = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<Dispatch>();

  const product = {
    name: "Áo thun nam",
    price: 40000,
    priceSale: 35000,
    description: "Áo thun nam đẹp, mặc thoáng mát",
    img: "../aothun.jpg",
  };

  useEffect(() => {
    callAPI();
    dispatch.count.increment(43);
    dispatch.product.addProduct(product);
  }, []);

  const productList = data.map((item, index) => {
    return <Product key={index} data={item} />;
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/lodash-example">
          <Flex>{productList}</Flex>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
