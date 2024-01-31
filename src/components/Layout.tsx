import { ReactNode } from "react";
import SidebarNew from "./sidebar/SidebarNew";
import Navbar from "./learn/Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="container-sidebar">
          <SidebarNew />
        </div>
        <div className="container-modules pl-7 bg-gray-50 ">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
