import {makeAutoObservable} from "mobx";


class Store {

    isLoading = false
    isInit = false

    constructor() {
        makeAutoObservable(this);
    }

}

export default new Store()