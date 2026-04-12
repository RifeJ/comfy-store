import { useEffect, useState } from "react";

export const ProductContex2 = (url) => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        setData(info.data);
        setMeta(info.meta);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [url]);
  return { data, meta, loading };
};
