import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
  },
});

const coinApi = {
  async getTopCoins() {
    const res = await api.get(
      "/coins/markets?vs_currency=usd&order=market_cap_desc"
    );
    return res.data;
  },

  async getCoinDetails(id) {
    const res = await api.get(`/coins/${id}`);
    return res.data;
  },

  async getPriceHistory(id, days = 1) {
    const res = await api.get(`/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
    return res.data;
  },
};

export default coinApi;
