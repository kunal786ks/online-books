import DashboardSuspense from "@/component/molecules/suspense/dashboardSuspense";
import dynamic from "next/dynamic";
const Nossr = dynamic(() => import("@/ui/dashboard"), {
  ssr: false,
  loading: () => <DashboardSuspense />,
});
const page = () => {
  return <Nossr />;
};

export default page;
