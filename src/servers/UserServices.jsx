import axios from "axios";

const APIprefix = "https://shortly-ed1w.onrender.com";

function getRanking() {
  return axios.get(`${APIprefix}/ranking`);
}

function postSignup(signup) {
  return axios.post(`${APIprefix}/signup`, signup);
}

function postSignin(signin) {
  return axios.post(`${APIprefix}/signin`, signin);
}

function postShorten(shorten, config) {
  return axios.post(`${APIprefix}/urls/shorten`, shorten, config);
}
function getUserMe( config) {
  return axios.get(`${APIprefix}/users/me`, config);
}
function deleteUrls( id, config) {
  return axios.delete(`${APIprefix}/urls/${id}`, config);
}

export { getRanking, postSignup, postSignin, postShorten, getUserMe, deleteUrls };
