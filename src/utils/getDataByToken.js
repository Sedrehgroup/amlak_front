// import useLocalStorage from "use-local-storage";
// const [accToken, setAccToken] = useLocalStorage("access_token", null);
// const [refToken, setRefToken] = useLocalStorage("refresh_token", null);
import axios from "axios";

async function getDataByRefToken(url, at, sat, rt, srt) {
  try {
    const Api_Url = process.env.REACT_APP_API_URL;
    const { data } = await axios.post(`${Api_Url}/account/token/refresh/`, {
      refresh: rt,
    });
    console.log("newAccToken", data.access);
    if (!data?.access) throw new Error();
    sat(data.access);
    const { data:data2 } = await axios.get(Api_Url + url, {
      headers: {
        Authorization: `Bearer ${data.access}`,
      },
    });
    // console.log("data2", data2);
    return(data2);
  } catch (err) {
    console.warn(err);
    console.log("refresh token is invalid!");
    sat(null);
    srt(null);
  }
}

export default async function getDataByTokens(url, at, sat, rt, srt) {
  try {
    const Api_Url = process.env.REACT_APP_API_URL;
    console.log("accTokne-inAxios", at);
    const { data } = await axios.get(Api_Url + url, {
      headers: {
        Authorization: `Bearer ${at}`,
      },
    });
    return data;
    console.log("user data", data);
  } catch (err) {
    console.warn(err);
    console.log("access token is invalid!");
    return getDataByRefToken(url, at, sat, rt, srt);
  }
}
