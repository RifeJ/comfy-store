import axios from "axios";

const api = axios.create({
  baseURL: "https://comfystorebackend-production.up.railway.app",
});

export const fetchFeaturedProducts = async () => {
  const { data: serverResponse } = await api.get("/products?featured=true");
  return serverResponse.data;
};

export const fetchSingleProduct = async (id) => {
  const { data: serverResponse } = await api.get(`/products/${id}`);
  return serverResponse.data;
};

export const fetchAllProducts = async () => {
  const { data: serverResponse } = await api.get("/products");
  return serverResponse.data;
};

export const fetchFilterProducts = async (filter) => {
  const res = await api.get("/products", {
    params: filter,
  });
  return res.data;
};
