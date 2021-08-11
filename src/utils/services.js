import { YOUTUBE_API_BASE_URL } from "../config/constants";

const buildUrl = (route, { baseUrl = YOUTUBE_API_BASE_URL, query }) => {
    const normalizedRoute = route.split('/').join('/')
    if (query) {

    } else return `${baseUrl}/${route}`
};
