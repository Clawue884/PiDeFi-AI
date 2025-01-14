import axios from 'axios';

export const transferPi = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/wallet/transfer', data);
    return response.data;
  } catch (error) {
    return { success: false, error: error.message };
  }
};
