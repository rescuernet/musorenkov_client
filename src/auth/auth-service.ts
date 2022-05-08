import $api from "../api/api";
import {RM} from "../routes/routes";
import {RMAPI} from "../routes/routes-api";

export class AuthService {
    static async login(email: string,password: string) {
        return $api.post(RM.Login.path,{email,password})
    }
    static async logout(id: string) {
        return $api.post(RMAPI.Logout.path,{id})
    }
}