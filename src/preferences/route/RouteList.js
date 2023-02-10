import React from 'react';
import { useRoutes } from "react-router-dom";
import Dashboard from '../../pages/Dashborad';
import Main from '../../pages/Main';

const RouteList = () => {
    const userRouters = useRoutes([
        // {
        //     path: '*',
        //     element: <Main /> // notfound 주면됌
        // },
        {
            path: "/",
            element: <Main />
        },
        {
            path: 'dashboard',
            element: <Dashboard />
        }
    ]);

    return userRouters;
};

export default RouteList;
