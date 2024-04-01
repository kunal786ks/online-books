import SettingSuspense from "@/component/molecules/suspense/settingSuspense";
import dynamic from "next/dynamic";
const NoSSR=dynamic(()=>import('@/ui/setting'),{ssr:false,loading:()=><SettingSuspense/>})
const page = () => {
  return (
    <NoSSR/>
  );
};
export default page;
