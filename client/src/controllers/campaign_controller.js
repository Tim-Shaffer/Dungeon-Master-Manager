import axios from "axios";

// findCampaign - get campaign information
export const findCampaign = campData => {
    // console.log(userData); - I know I have made it here!
    return axios.get("/api/campaign/" + campData);
};

// createCharacter - create character information
export const createCampaign = (userId, charData) => {
    // console.log(charData); - I know I have made it here!
    return axios.post("/api/campaign/" + userId, charData);
};

