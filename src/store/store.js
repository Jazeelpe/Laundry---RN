import { configureStore } from "@reduxjs/toolkit";

import reducers from "./userSlice";

export const store = configureStore({
  reducer: {
    user: reducers,
  },
});
