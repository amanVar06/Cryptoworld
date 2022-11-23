// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => {
//     getCryptos: builder.query({
//       query: (count) => createRequest(`/coins?limit=${count}`),
//     });
//   },
// });

// export const { useGetCryptosQuery } = cryptoApi;

// // const options = {
// //   method: "GET",
// //   url: "https://coinranking1.p.rapidapi.com/coins",
// //   params: {
// //     referenceCurrencyUuid: "yhjMzLPhuIDl",
// //     timePeriod: "24h",
// //     "tiers[0]": "1",
// //     orderBy: "marketCap",
// //     orderDirection: "desc",
// //     limit: "50",
// //     offset: "0",
// //   },
// //   headers: {
// //     "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
// //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// //   },
// // };

// // export const fetchdata = async () => {
// //   const apiResponse = await axios
// //     .request(options)
// //     .then((response) => response.data);
// //   return apiResponse;
// // };
