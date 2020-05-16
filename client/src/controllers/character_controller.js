import axios from "axios";

// findCharacter - get character information
export const findCharacter = charData => {
    // console.log(charData); - I know I have made it here!
    return axios.get("/api/character/" + charData);
};

// createCharacter - create character information
export const createCharacter = (userId, charData) => {
    // console.log(charData); - I know I have made it here!
    return axios.post("/api/character/" + userId, charData);
};