import $api from "../api/api";
import { RM } from "../routes/routes";

export class AuthService {
    static async login(email: string,password: string) {
        return $api.post(RM.Login.path,{email,password})
    }
}