import axios from "axios";

const randomuser = axios.create({
  baseURL: "https://randomuser.me/api",
});

export default randomuser;
