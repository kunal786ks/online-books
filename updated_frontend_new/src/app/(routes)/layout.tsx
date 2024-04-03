import { ReactNode } from "react";
import LayoutComponent from "@/layout";
export default function RouteLayout({ children }: { children: ReactNode }) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
