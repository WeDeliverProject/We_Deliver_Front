import urls from "../urls";
import httpClient from "../httpClient";

export const getJoint = () => httpClient.get(`${urls.order}/joint`);

export const create = (body) => httpClient.post(`${urls.order}/list`, body);

export const listAll = () => httpClient.get(`${urls.order}`);

export const createOrder = (body) => httpClient.post(`${urls.order}/`, body);

export const remove = (body) => httpClient.post(`${urls.order}/delete`, body);

export const plus = (body) => httpClient.post(`${urls.order}/plus`, body);

export const minus = (body) => httpClient.post(`${urls.order}/minus`, body);

export const createJoint = (body) => httpClient.post(`${urls.order}/joint`, body);
