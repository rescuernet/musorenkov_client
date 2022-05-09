import React, {ReactNode} from 'react';
import Header from "./header/header";
import {observer} from "mobx-react";
import AuthStore from "../auth/auth-store";

interface AuxProps {
    children: ReactNode;
}

export const Wrapper = observer(({children}: AuxProps) => {
    return (
        <div className="wrapper">
            {AuthStore.isAuth && (
                <>
                    <Header/>
                </>
            )}
            {children}
        </div>
    );
});