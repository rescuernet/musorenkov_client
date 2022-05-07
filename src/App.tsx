import React, {FC} from 'react';
import {RM} from './routes/routes'
import {Navigate, Route, Routes} from "react-router-dom";



export const App: FC = () => {
    const routes = Object.values(RM);
    console.log(routes)
    const isAuth = false
    return (
        <div className="App">
            <Routes>
                {routes.map(({path, Component, auth}) => (auth === isAuth || path === '/') &&
                    <Route key={path} path={path} element={<Component/>}/>)
                }
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    );
}

