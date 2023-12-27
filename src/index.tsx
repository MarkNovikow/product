import {render} from "react-dom";
import React from "react";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import 'shared/config/i18n/i18n'
import './app/styles/index.scss'
import {StoreProvider} from "app/providers/StoreProvider";

const root = document.getElementById('root')
render(
   <StoreProvider >
       <BrowserRouter>
           <ThemeProvider>
               <App/>
           </ThemeProvider>
       </BrowserRouter>
   </StoreProvider>,

    root
)
