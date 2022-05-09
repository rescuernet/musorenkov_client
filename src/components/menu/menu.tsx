import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import {useLocation, useNavigate} from "react-router-dom";
import {runInAction} from "mobx";
import Store from "../../store/store";


const useStyles = makeStyles( {
    wrap: {
        display: "flex",
        flexDirection: 'column',
        padding: '0 8px'
    },
    item: {
        transition: '0.3s',
        padding: '5px 10px',
        margin: '3px 0',
        minWidth: 200,
        fontSize: '110%',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f1f1f1'
        }
    }
});


export const MainMenu = () => {
    const classes = useStyles();
    const history = useNavigate();
    const location = useLocation()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = (link: string,title: string) => {
        setAnchorEl(null);
        runInAction(()=>{
            Store.headerTitle = title
        })
        history(link)
    };

    const menuArr = [
        {title: 'Главная', link: '/',role: ''},
        {title: 'Клиенты', link: '/clients',role: ''},
        {title: 'Пользователи', link: '/users',role: ''},
    ]


    return (
        <>
            <Button
                size={"small"}
                onClick={openMenu}
            >
                <MenuIcon style={{color: '#fff'}}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu}
            >
                <div className={classes.wrap}>
                    {menuArr.map((item)=>item.link !== location.pathname && (
                        <div key={item.link} className={classes.item} onClick={()=>closeMenu(item.link,item.title)}>{item.title}</div>
                    ))}
                </div>
            </Menu>
        </>
    );
};