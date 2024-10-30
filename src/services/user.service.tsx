import axios from "axios";

const USER_URL = `${import.meta.env.VITE_API_URL_DEV}/usuario`;

type UserProps = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
  role: string;
  position?: string;
  weight?: number;
  height?: number;
};

export const register = async (userData: UserProps) => {
  console.log("User data being sent:", userData); // Verifica los datos enviados
  try {
    const res = await axios.post(`${USER_URL}/register`, userData, {
      withCredentials: true,
    });
    console.log("Response:", res.data);
    return res.data;
  } catch (error: any) {
    console.error(
      "Error in registration:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const login = async (username: string, password: string) => {
  try {
    const res = await axios.post(
      `${USER_URL}/login`,
      { username, password },
      { withCredentials: true }
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return "invalid password";
    } else {
      throw new Error("Error en la solicitud de login");
    }
  }
};

export const logout = async () => {
  try {
    const res = await axios.post(
      `${USER_URL}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
