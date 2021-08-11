import axios from "axios";

export const validateToken = async (accessToken) => {
  return await axios.get(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
};

export const getChannelInfo = async (accessToken) => {
  return await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=id,snippet&mine=true&access_token=${accessToken}`
  );
}