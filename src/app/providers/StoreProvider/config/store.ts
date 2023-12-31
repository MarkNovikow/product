
import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {userReducer} from "entities/User";


export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer
    }
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
    });
}

