import urls from "../urls";
import httpClient from "../httpClient";

export const listAll = (category) => httpClient.get(`${urls.restaurant}/category/${category}`);
export const get = (restaurantId) => httpClient.get(`${urls.restaurant}/${restaurantId}`);
