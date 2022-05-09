import axios from "axios";
import {makeAutoObservable, runInAction} from "mobx";
import { SERVER_URL } from "../const/const";
import Store from "../store/store";
import {AuthService} from "./auth-service";


class AuthStore {

    user: any = {}
    isAuth: boolean = false
    authError: string = ''

    constructor() {
        makeAutoObservable(this);
    }

    Login = async (login: string,password: string) => {
        runInAction(() => {
            this.authError = ''
            Store.isLoading = true
        })
        try {
            const response = await AuthService.login(login,password);
            console.log('response',response)
            localStorage.setItem('token',response.data.token);
            runInAction(() => {
                this.user = response.data.user
                this.isAuth = true
            })
        } catch (e: any) {
            runInAction(() => {
                this.authError = e.message
            })
        }finally {
            runInAction(() => {Store.isLoading = false})
        }
    }

    Logout = async () => {
        runInAction(() => {Store.isLoading = true})
        try {
            const response = await AuthService.logout(this.user.id);
            localStorage.removeItem('token');
            runInAction(() => {this.user = {}})
            runInAction(() => {this.isAuth = false})
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }finally {
            runInAction(() => {Store.isLoading = false})
        }
    }

    authMe = async () => {
        runInAction(() => {Store.isLoading = true})
        try {
            const response = await axios.get(`${SERVER_URL}/api/auth-me`,{withCredentials:true});
            localStorage.setItem('token',response.data.token);
            runInAction(() => {this.user = response.data.user})
            runInAction(() => {this.isAuth = true})
        } catch (e) {
            localStorage.removeItem('token');
            runInAction(() => {this.user = {}})
            runInAction(() => {this.isAuth = false})
        } finally {
            runInAction(() => {Store.isLoading = false})
            runInAction(() => {Store.isInit = true})
        }
    }
}

export default new AuthStore()