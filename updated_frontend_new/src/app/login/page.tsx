import LoginPage from "@/ui/login/loginPage";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("@/ui/login/loginPage"), { ssr: false });
const page = () => {
  return <NoSSR />;
};
export default page;
