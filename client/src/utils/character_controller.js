import axios from "axios";

// findCharacter - get character information
export const findCharacter = charData => {
    return axios.get("/api/character/" + charData);
};

// createCharacter - create character information
export const createCharacter = (userId, charData) => {
    return axios.post("/api/character/" + userId, charData);
};

// updateCharacter - update character information
export const updateCharacter = (charId, charData) => {
    return axios.put("/api/character/" + charId, charData);
};

// getCharacters - get all character information
export const getCharacters = () => {
    return axios.get("/api/character/");
};

// deleteCharacter - delete character information
export const deleteCharacter = (charId) => {
    return axios.delete("/api/character/" + charId);
};