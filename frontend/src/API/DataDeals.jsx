import axios from "axios";

const API_URL = "https://www.cheapshark.com/api/1.0/deals";

export default async function getDeals() {
  try {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  } catch (error) {
    return error;
  }
}
