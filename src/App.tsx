import React, {FC, useEffect} from 'react';
import {RM} from './routes/routes'
import {Navigate, Route, Routes} from "react-router-dom";
import {Wrapper} from "./components/wrapper";
import AuthStore from "./auth/auth-store";
import {runInAction, toJS} from "mobx";
import Store from "./store/store";
import {observer} from "mobx-react";






const App: FC = () => {
    const routes = Object.values(RM);

    useEffect(() => {
        if(localStorage.getItem('token')){
            runInAction(()=>{AuthStore.authMe()})
        }else{
            Store.isInit = true
        }
    }, []);
    return (
        <div className="App">
            <Wrapper>
                {Store.isInit && (
                    <Routes>
                        {routes.map(({path, Component, auth}) => auth === AuthStore.isAuth &&
                            <Route key={path} path={path} element={<Component/>}/>)
                        }
                        <Route
                            path="*"
                            element={AuthStore.isAuth ? <Navigate to="/" replace /> : <Navigate to="/login" replace />}
                        />
                    </Routes>
                )}
            </Wrapper>
        </div>
    );
}

export default observer(App)

