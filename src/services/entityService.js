import api from "./api";
export const getCharacters = async (page = 1, limit = 10, name = "") => {
  try {
    const response = await api.get(`/characters`, {
      params: {
        page,
        limit,
        name,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
