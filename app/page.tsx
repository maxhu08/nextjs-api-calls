import { ClientFetchingComponent } from "@/components/client-fetching";
import { ServerFetchingComponent } from "@/components/server-fetching";

const Page = () => {
  return (
    <div>
      <ClientFetchingComponent />
      <ServerFetchingComponent />
    </div>
  );
};

export default Page;
