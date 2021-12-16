import urls from "../urls";
import httpClient from "../httpClient";

export const listAll = (restaurantId) =>
  httpClient.get(`${urls.review}/${restaurantId}`);

export const listAllTodayReview = () => 
  httpClient.get(`${urls.review}/today/o`);

