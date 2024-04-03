import dynamic from "next/dynamic";
import DiscoverSuspense from "@/component/molecules/suspense/discoverSuspense";

const Nossr = dynamic(() => import("@/ui/discover"), {
  ssr: false,
  loading: () => <DiscoverSuspense />,
});
const page = () => {
  return <Nossr />;
};

export default page;
