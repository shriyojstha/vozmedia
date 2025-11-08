import { create } from "zustand";
import axios from "axios";

const API_URL = "https://vozmedia.onrender.com/auth";

axios.defaults.withCredentials = true;

export const authStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email, password, username) => {
    set({ isLoading: true, error: null });
    try {
      console.log(API_URL);
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        username,
      });
      set({
        user: response.data,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, {
        code,
      });

      set({
        user: response.data.user,
        isLoading: false,
        isAuthenticated: true,
      });
      return response.data;
    } catch (error) {
      set({ isLoading: false, error: error });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      set({
        isLoading: false,
        isAuthenticated: true,
        isAuthCheck: false,
        user: response.data,
      });
    } catch (err) {
      set({
        isLoading: false,
        isAuthCheck: false,
        error: err.response.data.message,
      });
      const message =
         "Invalid credentials, please try again";

        throw new Error(message);
    }
  },

  logOut: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({ isLoading: false, isAuthenticated: false, user: null });
    } catch (error) {
      set({ isLoading: false, isAuthCheck: false });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isLoading: false,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({
        error: error?.response?.data?.message,
        isAuthenticated: false,
        isCheckingAuth: false,
        isLoading: false,
      });
    }
  },
}));
