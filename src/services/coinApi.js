import axios from "axios";

axios.create(
    {baseURL: "https://api.coingecko.com/api/v3",
    headers: {
        "x-cg-demo-api-key"
    }
    }
)