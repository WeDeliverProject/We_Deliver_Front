import urls from "../urls";
import httpClient from "../httpClient";

export const getJoint = () => httpClient.get(`${urls.order}/joint`);
