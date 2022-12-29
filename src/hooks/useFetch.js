import { useState, useEffect } from "react";
export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [opstions, setOpstions] = useState(null);

  function postData(data) {
    setOpstions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (featchOpstions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, {
          signal: controller.signal,
          ...featchOpstions,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && opstions) {
      fetchData(opstions);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, opstions]);

  return { data, isPending, error, postData };
};
