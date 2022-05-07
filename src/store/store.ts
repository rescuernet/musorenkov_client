import {makeAutoObservable} from "mobx";


class Store {

    isInit = 0

    constructor() {
        makeAutoObservable(this);
    }

}

export default new Store()