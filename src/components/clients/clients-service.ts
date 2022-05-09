import $api from "../../api/api";
import {RM} from "../../routes/routes";

export class ClientsService {
    static async getClients() {
        return $api.get(RM.Clients.path)
    }
}