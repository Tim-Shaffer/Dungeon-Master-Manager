import axios from "axios";

// findCampaign - get campaign information
export const findCampaign = campData => {
    return axios.get("/api/campaign/" + campData);
};

// createCampaign - create campaign information
export const createCampaign = (userId, campData) => {
    return axios.post("/api/campaign/" + userId, campData);
};

// deleteCampaign - delete campaign information
export const deleteCampaign = (campId) => {
    return axios.delete("/api/campaign/" + campId);
};

