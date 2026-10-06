import axios from "axios";
import type { Cv } from "../types/cv";

const API = "http://localhost:8080/api/cvs";

export const getCvs = async (): Promise<Cv[]> => {
  const response = await axios.get<Cv[]>(API);

  return response.data;
};
export const getCvById = async (id: number): Promise<Cv> => {
  const response = await fetch(`${API}/${id}`);

  if (!response.ok) {
    throw new Error("Không tìm thấy CV");
  }

  const data: Cv = await response.json();

  return data;
};
