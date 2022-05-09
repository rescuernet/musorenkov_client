import {Button, makeStyles} from '@material-ui/core';
import React from 'react';
import {MainMenu} from "../menu/menu";
import {runInAction} from "mobx";
import AuthStore from "../../auth/auth-store";
import Store from "../../store/store";
import {observer} from "mobx-react";

const useStyles = makeStyles({
    header: {
        backgroundColor: '#4D7198',
        padding: 5,
        display: 'flex',
        justifyContent: "space-between"
    },
    title: {
        flex: '1 0',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: '#fff',
        fontSize: '110%'
    }
});

const Header = () => {
    const classes = useStyles();


    return (
        <div className={classes.header}>
            <MainMenu/>
            <div className={classes.title}>{Store.headerTitle}</div>
            <Button
                variant={'contained'}
                color={'primary'}
                size={"small"}
                style={{marginRight: 10}}
                onClick={() => {
                    runInAction(() => {
                        AuthStore.Logout()
                    })
                }}
            >
                выход
            </Button>
        </div>
    );
};

export default observer(Header)