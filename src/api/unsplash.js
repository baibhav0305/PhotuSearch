import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Yn8FRAAMhyH_e12OxdgqcistW-dNdBNfCi7SyfYCUc0"
    }
});