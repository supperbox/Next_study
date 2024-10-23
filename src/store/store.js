import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./features/login";

const store = configureStore({
  // 定义一个名为 `todos` 的顶级 state 字段，值为 `todosReducer`
  reducer: {
    login: loginSlice,
  },
});

export default store;
