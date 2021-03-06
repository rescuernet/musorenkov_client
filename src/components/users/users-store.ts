import {makeAutoObservable, runInAction, toJS} from "mobx";
import Store from "../../store/store";
import {UsersService} from "./users-service";

class UsersStore {

    users = []

    constructor() {
        makeAutoObservable(this);
    }

    getUsers = async () => {
        runInAction(() => {
            Store.isLoading = true
        })
        try {
            const response = await UsersService.getUsers()
            runInAction(() => {this.users = response.data})
        } catch (e) {

        }finally {
            runInAction(() => {Store.isLoading = false})
        }
    }

}

export default new UsersStore()