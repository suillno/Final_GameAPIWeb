import { instance } from "./instance";

export const apiGetGameList = async (pageNext: number) => {
  return await instance
    .get("", {
      params: {
        key: process.env.REACT_APP_API_KEY,
        page_size: 20,
        page: pageNext,
      },
    })
    .then((res) => res.data);
};

export const apiGetGameDetail = async (gameId: string) => {
  return await instance
    .get(`/${gameId}`, {
      params: {
        key: process.env.REACT_APP_API_KEY,
      },
    })
    .then((res) => res.data);
};
