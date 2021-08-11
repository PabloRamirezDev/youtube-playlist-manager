import axios from "axios";
import { YOUTUBE_API_BASE_URL as BASE_URL } from "../config/constants";

export const listChannels = (user) => {
    axios.get(`${BASE_URL}/channels`)
}