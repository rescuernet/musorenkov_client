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
            console.log(response)
            runInAction(() => {this.users = response.data})
            console.log(toJS(this.users))
        } catch (e) {

        }finally {
            runInAction(() => {Store.isLoading = false})
        }
    }

}

export default new UsersStore()