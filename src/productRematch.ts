import { createModel } from "@rematch/core";
import { RootModel } from "./models";

type ProductInfo = {
  name: string;
  price: number;
  priceSale?: number;
  description: string;
  img: string;
};

export const product = createModel<RootModel>()({
  state: {
    name: "",
    price: 0,
    priceSale: 0,
    description: "",
    img: "",
  } as ProductInfo,
  reducers: {
    addProduct(state, payload: ProductInfo) {
      return {
        ...state,
        payload,
      };
    },
  },
});
