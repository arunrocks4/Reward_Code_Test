import { API_URL, GET_ALL_PRODUCTS_URL } from "../Constants/service.constans";

export const getAllProducts = async () => {
    try {
        const response =  await fetch(`${API_URL}${GET_ALL_PRODUCTS_URL}`)
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}