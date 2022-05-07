import React, {FC} from 'react';
import { Navigate } from 'react-router-dom';
import {Button} from "@material-ui/core";
import Store from "../../store/store";
import {observer} from "mobx-react";
import {runInAction} from "mobx";

const Main: FC = () => {
    const isAuth = true
    if(!isAuth){return <Navigate replace to="/login" />}

    return (
        <div>
            <h5>{Store.isInit}</h5>
            <Button onClick={()=>{
                runInAction(()=>{
                    Store.isInit++
                })
            }}>init</Button>
        </div>
    );
};

export default (observer(Main))