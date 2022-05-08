import $api from "../../api/api";
import {RM} from "../../routes/routes";

export class UsersService {
    static async getUsers() {
        return $api.get(RM.Users.path)
    }
}