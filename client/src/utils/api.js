import axios from 'axios';

export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    signup: (signupData) => {
        return axios.post("/api/signup", signupData)
    },
    login: (loginData) => {
        return axios.post("/api/login", loginData)
    },
    logout: () => {
       return axios.get("/api/logout"); 
    },
    findFriendsbyUserName: (userName) =>{
        return axios.get("/api/userlist/" + userName)
    },
    followingPeople: function(name) {
        return axios.post("/api/followinglist", name);
    }
}