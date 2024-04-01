import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("@/ui/signup"), { ssr: false });
export default function login() {
  return <NoSSR />;
}
