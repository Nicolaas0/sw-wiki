import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [data, setData] = useState();
  console.log(url);

  const showData = () => {
    if (url) {
      console.log("FETCHING DATA!");
      const controller = new AbortController();
      axios
        .get(url, { signal: controller.signal })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("successfully aborted");
          }
        });

      return () => {
        controller.abort();
      };
    }
  };

  useEffect(() => {
    showData(url);
  }, [url]);

  return { data };
};

export default FetchData;
