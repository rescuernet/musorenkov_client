import { Login } from "../components/login/login"
import Main from "../components/main/main";
import React from "react";
import {Users} from "../components/users/users";

export type RoutesTypeItem = {
    path: string
    Component: React.FC
    auth: boolean
}

export type RoutesType = {
    Login: RoutesTypeItem
}

const Routes = {
    Main: {
        path: '/',
        Component: Main,
        auth: false,
    },
    Login: {
        path: '/login',
        Component: Login,
        auth: false,
    },
    Users: {
        path: '/users',
        Component: Users,
        auth: true,
    },
}

export const RM = Routes