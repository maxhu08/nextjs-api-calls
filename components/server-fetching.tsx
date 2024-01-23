import axios from "axios";
import { FC } from "react";

export const ServerFetchingComponent: FC = async () => {
  const { data } = await axios.get("https://www.boredapi.com/api/activity");

  return (
    <div className="p-2 bg-indigo-500/50">
      server fetching
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
