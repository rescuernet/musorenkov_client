import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {observer} from "mobx-react";
import {runInAction} from "mobx";
import AuthStore from "../../auth/auth-store";

const Main: FC = () => {

    const history = useNavigate();


    return (
        <div>
            <Button onClick={()=>{
                history('/users')
            }}>users</Button>

            <Button onClick={()=>{
                runInAction(()=>{
                    AuthStore.isAuth = false
                })
            }}>logout</Button>
        </div>
    );
};

export default (observer(Main))