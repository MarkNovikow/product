import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map((route) => {
                    return (
                        <Route key={route.path} path={route.path} element={(
                            <div className="page-wrapper">
                                {route.element}
                            </div>
                        )}>

                        </Route>
                    )
                })}
            </Routes>
        </Suspense>
    );
};

export {AppRouter};