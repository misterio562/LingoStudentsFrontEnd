import { Link } from "react-router-dom";
import Button from "../Button";
import { LogoLingoStudents } from "../Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full h-20 sticky top-0 z-50 bg-black p-2">
      <LogoLingoStudents />
      <Link to="/login">
        <Button login>Empieza ahora</Button>
      </Link>
    </nav>
  );
}
