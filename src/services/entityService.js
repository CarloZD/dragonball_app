import api from "./api";

export const getCharacters = async (page = 1) => {
  try {
    const response = await api.get(`/characters?page=${page}`);
    return response.data; 
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el personaje:", error);
    throw error;
  }
};
