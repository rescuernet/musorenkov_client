import Login  from "../components/login/login"
import Main from "../components/main/main";
import Users from "../components/users/users";
import Clients from "../components/clients/clients";

const Routes = {
    Login: {
        path: '/login',
        Component: Login,
        auth: false,
        menu: false
    },
    Main: {
        path: '/',
        Component: Main,
        auth: true,
        menu: true
    },
    Users: {
        path: '/users',
        Component: Users,
        auth: true,
        menu: true
    },
    Clients: {
        path: '/clients',
        Component: Clients,
        auth: true,
        menu: true
    },
}


export const RM = Routes
