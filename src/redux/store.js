import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { drugsReducer } from "./drugs/drugsSlice";
import { favoriteReducer } from "./favorites/favoriteSlice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedRootReducer = persistReducer(favoritesPersistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
    favorites: persistedRootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
