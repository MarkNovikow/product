import React, {FC, ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";


interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema
}

const StoreProvider:FC<StoreProviderProps> = ({children}) => {
    const store = createReduxStore()
 return (
  <Provider store={store}>
      {children}
  </Provider>
 );
};

export default StoreProvider;