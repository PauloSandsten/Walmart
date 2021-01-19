import { useState } from "react";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string, options: RequestInit | undefined) => {
    setLoading(true);
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setLoading(false);
      setResponse(json);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return [response, fetchData, loading, error];
};

export { useFetch };
