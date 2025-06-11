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
