import axios from "axios";

// findCampaign - get campaign information
export const findCampaign = campData => {
    // console.log(userData); - I know I have made it here!
    return axios.get("/api/campaign/" + campData);
};