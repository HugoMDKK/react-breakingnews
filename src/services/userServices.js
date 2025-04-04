import axios from "axios";
import { data } from "react-router-dom";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function signin(data) {
  const response = axios.post(`${baseURL}/auth/login`, data);
  return response;
}

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://i.imgur.com/0uM5MA7.jpeg",
    background:
      "https://i.imgur.com/Q5BHluw_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

export async function userLogged() {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Token não encontrado!");
  }
  try {
    const response = await axios.get(`${baseURL}/user/findById`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Retorna apenas os dados do usuário
  } catch (error) {
    console.error("Erro ao buscar usuário logado:", error);
    throw error;
  }
}

function generateUserName(name) {
  const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}
