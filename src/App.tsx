import React, { useEffect, useState } from "react";
import { Flex } from "rebass";
import "./App.css";
import { Header } from "./Header";
import { Product } from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./Login";
import { Dispatch, RootState } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

type ProductProps = {
  name: string;
  price: number;
  priceSale?: number;
  description: string;
  img: string;
};

const App = () => {
  const [data, setData] = useState<ProductProps[]>([
    {
      description: "",
      price: 0,
      name: "",
      img: "",
    },
  ]);

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
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

  console.log("countState: ", countState);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Flex>{productList}</Flex>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
