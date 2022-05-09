import { observer } from 'mobx-react';
import React, {useEffect} from 'react';
import {runInAction} from "mobx";
import ClientsStore from "./clients-store";

const Clients = () => {

    useEffect(()=> {
        runInAction(()=>{
            ClientsStore.getClients()
        })
    },[])

    return (
        <div>

        </div>
    );
};
export default observer(Clients)