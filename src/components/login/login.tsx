import React, {FC, useState} from 'react';
import {Button, makeStyles, TextField} from "@material-ui/core";
import AuthStore from "../../auth/auth-store";
import {Navigate} from "react-router-dom";
import {observer} from "mobx-react";

const useStyles = makeStyles({
    wrap: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    login: {
        width: 200,
    },
    field: {
        marginBottom: 20
    }
})


const Login: FC = () => {

    const classes = useStyles();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={classes.wrap}>
            <div className={classes.login}>
                <TextField
                    label="логин"
                    variant={"outlined"}
                    value={login}
                    onChange={(e) => {
                        setLogin(e.target.value)
                    }}
                    fullWidth
                    className={classes.field}
                    error={!!AuthStore.authError}
                    onFocus={()=>{AuthStore.authError = ''}}
                />
                <TextField
                    label="пароль"
                    variant={"outlined"}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    fullWidth
                    className={classes.field}
                    error={!!AuthStore.authError}
                    onFocus={()=>{AuthStore.authError = ''}}
                />
                <Button
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    size={"large"}
                    onClick={()=>AuthStore.Login(login,password)}
                >
                    войти
                </Button>
            </div>
        </div>
    );
};

export default observer(Login)