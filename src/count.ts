import { createModel } from "@rematch/core";
import { RootModel } from "./models";
type Names = "custom";
type ComplexCount = {
  count: number;
  multiplierName?: Names;
};

export const count = createModel<RootModel>()({
  state: {
    count: 0,
    multiplierName: "custom",
  } as ComplexCount,
  reducers: {
    increment(state, payload: number) {
      return {
        count: state.count + payload,
      };
    },
  },
  effects: (dispatch) => ({
    incrementAsync(payload: number, state) {
      dispatch.count.increment(payload);
    },
  }),
});
