import axios from "axios";

export default {
  
  // try to login
  logUser: function() {
    return axios.post("/user/login");
  },

  createUser: function(userData) {
    console.log("create User was Triggered")
    return axios.post("/user/register");
  },

};
