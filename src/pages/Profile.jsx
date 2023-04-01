import React, { useContext } from "react";
import Footer from "../components/Footer";
import { LogoLingoStudents } from "../components/Logo";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const { userLogin } = useContext(AuthContext);
  return (
    <>
      <div className=" m-4 flex justify-around items-center font-lilita text-xl">
        <div className="w-1/5">
          <LogoLingoStudents />
        </div>
        <div className="w-1/5">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/275/818/non_2x/female-avatar-woman-profile-icon-for-network-vector.jpg"
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-sm text-gray-400">ID {userLogin.idStudent}</h2>
          <h2>{userLogin.displayName}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 px-6">
        <hr className=" my-8 w-full border-gray-400 border-1 justify-center items-center" />
      </div>

      <div className="flex justify-center items-center font-lilita text-2xl">
        <h2>Logros</h2>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
