import {makeAutoObservable, runInAction, toJS} from "mobx";
import Store from "../../store/store";
import { ClientsService } from "./clients-service";


class ClientsStore {

    clients = []

    constructor() {
        makeAutoObservable(this);
    }

    getClients = async () => {
        runInAction(() => {
            Store.isLoading = true
        })
        try {
            const response = await ClientsService.getClients()
            runInAction(() => {this.clients = response.data})
        } catch (e) {

        }finally {
            runInAction(() => {Store.isLoading = false})
        }
    }

}

export default new ClientsStore()