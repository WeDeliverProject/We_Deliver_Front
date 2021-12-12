import urls from "../urls";
import httpClient from "../httpClient";

export const listAll = (restaurantId) => httpClient.get(`${urls.menu}/${restaurantId}`);
export const listAllAddition = (menuId) => httpClient.get(`${urls.menu}/plus/${menuId}`);
