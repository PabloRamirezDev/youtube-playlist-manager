import axios from "axios";

export const listPlaylists = async (accessToken) => {
    return await axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=id,snippet,status&mine=true&maxResults=20&access_token=${accessToken}`)
}

export const createPlaylist = async (accessToken, playlist) => {
    return await axios.post(`https://www.googleapis.com/youtube/v3/playlists?part=snippet,status&access_token=${accessToken}`, {})
}