import Login  from "../components/login/login"
import Main from "../components/main/main";
import {Users} from "../components/users/users";

const Routes = {
    Login: {
        path: '/login',
        Component: Login,
        auth: false,
    },
    Main: {
        path: '/',
        Component: Main,
        auth: true,
    },
    Users: {
        path: '/users',
        Component: Users,
        auth: true,
    },
}

export const RM = Routes