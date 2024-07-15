import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);

  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  //   const res = await apiRequest("/posts?" + query);

  //   return res.data;

  // using defer
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};
