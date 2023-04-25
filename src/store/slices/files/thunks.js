import { fileApi } from "../../../api/fileApi";
import { setFiles, startLoadingFlies } from "./fileSlice";

export const getFiles = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingFlies());

    // TODO: realizar petición http
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
    // const data = await resp.json();
    const { data } = await fileApi.get(`/files/data`);

    dispatch(setFiles({ files: data }));
  };
};
