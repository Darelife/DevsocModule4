import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
