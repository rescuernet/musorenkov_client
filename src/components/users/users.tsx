import React, {useEffect} from 'react';
import UsersStore from "./users-store";
import {Button} from "@material-ui/core";
import {runInAction} from "mobx";
import { observer } from 'mobx-react';

const Users = () => {



    return (
        <div>
            <Button onClick={()=> {
                runInAction(()=>{
                    UsersStore.getUsers()
                })
            }}>get users</Button>
        </div>
    );
};

export default observer(Users)