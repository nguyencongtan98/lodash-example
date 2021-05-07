import { Models } from "@rematch/core";
import { count } from "./count";
import { product } from "./productRematch";

export interface RootModel extends Models<RootModel> {
  count: typeof count;
  product: typeof product;
}

export const models: RootModel = { count, product };
