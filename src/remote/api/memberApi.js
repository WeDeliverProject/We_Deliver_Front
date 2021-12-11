import urls from "../urls";
import httpClient from "../httpClient";

export const signup = (form) => httpClient.post(`${urls.member}/register`, form);
export const login = (form) => httpClient.post(`${urls.member}/login`, form);
export const token = () => httpClient.get(urls.member);
