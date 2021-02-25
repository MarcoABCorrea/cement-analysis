import axios from "axios";
export default axios.create({
  baseURL: "https://f8b3qp.deta.dev/cements",
  headers: {
    "Content-Type": "application/json",
  },
});
