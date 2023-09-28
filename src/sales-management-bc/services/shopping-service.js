import axios from "axios"

export class ShoppingCartService {
    getAll() {
        return axios.get("../../cartItems.json");
    }
}