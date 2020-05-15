import axios from "axios";

// findCharacter - get character information
export const findCharacter = charData => {
    // console.log(charData); - I know I have made it here!
    return axios.get("/api/character/" + charData);
};