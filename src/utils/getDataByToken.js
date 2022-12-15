import useLocalStorage from "use-local-storage";


const [accToken, setAccToken] = useLocalStorage("access_token", null);
const [refToken, setRefToken] = useLocalStorage("refresh_token", null);

async function setDataByRefToken(url, func) {
  try {
    const Api_Url = process.env.REACT_APP_API_URL;
    const { data } = await axios.post(`${Api_Url}/account/token/refresh/`, {
      refresh: refToken,
    });
    console.log("newAccToken", data.access);
    if (!data) throw new Error();
    setAccToken(data.access);
    const { data2 } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accToken}`,
      },
    });
    func(data2);
  } catch (err) {
    console.log("refresh token is invalid!");
    setAccToken(null);
    setRefToken(null);
  }
}

export async function setDataByTokens(url, func) {
  try {
    const Api_Url = process.env.REACT_APP_API_URL;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accToken}`,
      },
    });
    func(data);
    console.log("user data", data);
  } catch (err) {
    console.warn(err);
    console.log("access token is invalid!");
    setDataByRefToken(url, func);
  }
}
