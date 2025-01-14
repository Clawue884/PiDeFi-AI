import axios from 'axios';

export const authenticateUser = async (userId, authToken) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/auth/pi-login?userId=${userId}&authToken=${authToken}`
    );
    return response.data;
  } catch (error) {
    return { success: false, error: error.message };
  }
};
