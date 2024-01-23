"use client";

import axios from "axios";
import { FC, useEffect, useState } from "react";

export const ClientFetchingComponent: FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://www.boredapi.com/api/activity");
      setData(res.data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="p-2 bg-blue-500/50">
      client fetching
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
