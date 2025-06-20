import { BASE_URI as MAIN_URI } from "./constants";

const { default: axios } = require("axios");

// const BASE_URI = "http://192.168.100.11:5050/api/v1";
const BASE_URI = `${MAIN_URI}/api/v1`;

const api = axios.create({
  baseURL: BASE_URI,
  withCredentials: true,
});

export const addBusiness = async (data) => {
  const token = localStorage.getItem("token");

  api.post(`${BASE_URI}/businesses`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getQrMenu = async (slug) =>
  await api.get(`${BASE_URI}/businesses/qr/${slug}`);

export const register = async (formData) => {
  const token = localStorage.getItem("token");

  return await api.post("/businesses", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getCategories = async (id) => {
  const token = localStorage.getItem("token");
  return await api.get(`${BASE_URI}/items/category/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const addNewCategory = async (data) => {
  const token = localStorage.getItem("token");

  return await api.post(`${BASE_URI}/categories`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCategory = async (categoryId, data) => {
  return await axios.patch(`${BASE_URI}/categories/${categoryId}`, data);
};

export const addNewProduct = async (data) => {
  const token = localStorage.getItem("token");

  return await api.post(`${BASE_URI}/items`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteCategory = async (id) => {
  const token = localStorage.getItem("token");

  return await api.delete(`${BASE_URI}/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyQr = async (id) => {
  const token = localStorage.getItem("token");

  return await api.get(`${BASE_URI}/businesses/getMyQr/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProducts = async (id) => {
  const token = localStorage.getItem("token");
  return await api.get(`${BASE_URI}/items/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPublished = async (id) => {
  const token = localStorage.getItem("token");
  return await api.get(`${BASE_URI}/businesses/publish/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateItem = (itemId, updatedData) => {
  return axios.patch(`${BASE_URI}/items/${itemId}`, updatedData);
};

export const deleteItemById = (itemId) => {
  return axios.delete(`${BASE_URI}/items/${itemId}`);
};

export const getMyBusiness = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${BASE_URI}/businesses/myBusinesses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fileUpload = (formData) => {
  const token = localStorage.getItem("token");
  return axios.post(`${BASE_URI}/upload`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const refreshToken = async (token) => {
  return axios.post(`${BASE_URI}/auth/refreshToken`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getReview = async (token, id) => {
  return await axios.get(`${BASE_URI}/reviews/place/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addReview = async (reviewData) => {
  return axios.post(`${BASE_URI}/reviews`, reviewData);
};

export const getBusinessById = async (id) => {
  const token = localStorage.getItem("token");
  return await axios.get(`${BASE_URI}/businesses/business/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPlans = async () => {
  const token = localStorage.getItem("token");
  return await axios.get(`${BASE_URI}/plans`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const goPro = async (selectedPlan, businessId) => {
  const token = localStorage.getItem("token");
  return await axios.post(
    `${BASE_URI}/businesses/goPro`,
    { planId: selectedPlan, businessId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};
