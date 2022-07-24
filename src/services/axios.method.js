import axios from "./axios.services.js";

export async function _GET(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
}

export async function _POST(url, requestData, headers) {
  try {
    const response = await axios.post(url, requestData, headers);
    return response;
  } catch (error) {
    return error;
  }
}

export async function _PATCH(url, requestData) {
  try {
    const response = await axios.patch(url, requestData);
    return response;
  } catch (error) {
    return error;
  }
}
