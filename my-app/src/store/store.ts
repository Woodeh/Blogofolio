import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/reducer";
import { postsReducer } from "./posts/reducer";
import { confirmEmailReducer } from "./confirmEmail/reducer";
import { authReducer } from "./auth/reducer";
import { userInfoReducer } from "./userInfo/reducer";
import { tabsReducer } from "./tabs/reducer";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        confirmEmail: confirmEmailReducer,
        auth: authReducer,
        userInfo: userInfoReducer,
        tabs: tabsReducer,
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;