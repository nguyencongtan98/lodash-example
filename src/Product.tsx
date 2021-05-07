import React from "react";
import { Box, Card, Heading, Image, Text } from "rebass";

type ProductInfo = {
  name: string;
  price: number;
  priceSale?: number;
  description: string;
  img: string;
};

type ProductProps = {
  data: ProductInfo;
};

export const Product = (props: ProductProps): JSX.Element => {
  const { data } = props;
  const { description, img, name, price } = data;
  return (
    <Card width={1 / 4} height="100" textAlign="center">
      <Image width={200} height={200} src={img} />
      <Box px={2}>
        <Heading as="h3">{name}</Heading>
        <Text fontSize={1}>Price:{price}</Text>
        <Text fontSize={0}>{description}</Text>
      </Box>
    </Card>
  );
};
