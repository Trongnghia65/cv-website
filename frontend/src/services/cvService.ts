import axios from "axios";
import type { Cv } from "../types/cv";

const API = "https://cv-backend-pkwx.onrender.com/api";

export const getCvs = async (): Promise<Cv[]> => {
  const response = await axios.get<Cv[]>(`${API}/cvs`);

  return response.data;
};
export const getCvById = async (id: number): Promise<Cv> => {
  const response = await fetch(`${API}/cvs/${id}`);

  if (!response.ok) {
    throw new Error("Không tìm thấy CV");
  }

  const data: Cv = await response.json();

  return data;
};
