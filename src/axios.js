import axios from 'axios';

const instance = axios.create({
         baseURL: "https://us-central1-nat-4ed21.cloudfunctions.net/api"
      //  baseURL: "http://127.0.0.1:5010/nat-4ed21/us-central1/api",
    
});
export default instance;

// https://us-central1-nat-4ed21.cloudfunctions.net/