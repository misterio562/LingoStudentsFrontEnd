import { LogoLingoStudents } from "../Logo";
import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
import Logout from "../Logout";

export default function Navbar() {
  const { userLogin } = useContext(AuthContext);

  return (
    <nav className="flex justify-between w-full h-20 sticky top-0 z-50 bg-black p-2">
      <LogoLingoStudents />
      <h2 className="self-center text-4xl text-slate-200 font-lilita ">
        {userLogin?.displayName}
      </h2>
      <Logout />
    </nav>
  );
}
