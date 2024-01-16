import { configureStore } from '@reduxjs/toolkit'

import value from "./slices/value"

export const store = configureStore({
    reducer: {
         streemValue: value,
    },
  })