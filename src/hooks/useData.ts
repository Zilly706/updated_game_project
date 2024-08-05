// import { AxiosRequestConfig, CanceledError } from "axios";
// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";

// export interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }

// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?:any[] ) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setIsLoading(true);

//     apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
//       .then((res) => {
//         setData(res.data.results);
//         setIsLoading(false); // Set isLoading to false after data is successfully fetched
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setIsLoading(false); // Set isLoading to false in case of an error
//       });

//     return () => controller.abort();
//   }, deps ?[...deps]: []); // Add endpoint as dependency

//   return { data, error, isLoading };
// }

// export default useData;
