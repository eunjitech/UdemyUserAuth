import axios from "axios";

const BACKEND_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const API_KEY = "AIzaSyDY8r2QhsS-gsJbB-tZoWazmN4aZn0TGPA";

export async function createUser({ email, password }) {
  const response = await axios.post(BACKEND_URL + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
