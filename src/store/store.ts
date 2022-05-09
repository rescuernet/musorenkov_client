import {makeAutoObservable} from "mobx";


class Store {

    isLoading = false
    isInit = false
    headerTitle = 'Главная'

    constructor() {
        makeAutoObservable(this);
    }

}

export default new Store()