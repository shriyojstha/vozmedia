import { create } from "zustand";
import axios from "axios";

const API_URL = "https://vozmedia.onrender.com/post";

axios.defaults.withCredentials = true;

export const postStore = create((set) => ({
    postData: [],
    error: null,
    isLoading: false,

    getPost: async() => {
        set({isLoading: true, error: null});

        try {
            const response = await axios.get(`${API_URL}/posts`);
            set({ postData: response.data, isLoading: false });
        } catch (error) {
            set({error: error?.response?.data?.message, isLoading: false})
            throw error;
        }
        

    }
}));
