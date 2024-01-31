import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faHome } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { LogoLingoStudents } from "../components/Logo";
import { AuthContext } from "../context/authContext";
import { checkModuleCompleted, getAllModules } from "../../src/api/module/module.js";

const Profile = () => {
  const { userLogin } = useContext(AuthContext);
  const [modules, setModules] = useState([]);
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await getAllModules();
        setModules(response.data);

        const completedModules = await Promise.all(
          response.data.map(async (module) => {
            let status;
            try {
              status = await checkModuleCompleted(
                userLogin.idStudent,
                module.idModule
              );
            } catch (error) {
              console.error(error);
              status = 404;
            }
            if (status === 200) {
              return module;
            } else {
              return null;
            }
          })
        );
        setCompletedModules(
          completedModules.filter((module) => module !== null)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchModules();
  }, []);

  return (
    <>
      <div className=" m-4 flex justify-around items-center font-lilita text-xl">
        <div className=" flex flex-col w-1/5 space-y-4 justify-center items-center">
          <LogoLingoStudents />
          <Link to="/">
            <a className="text-2xl text-green-600">
              <FontAwesomeIcon
                icon={faHome}
                size="lg"
                style={{ marginRight: "0.5em" }}
              />
              <span>Inicio</span>{" "}
            </a>
          </Link>
        </div>
        <div className="w-1/5">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/275/818/non_2x/female-avatar-woman-profile-icon-for-network-vector.jpg"
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <div className="flex items-center">
            <h2 className="text-sm text-gray-400">ID {userLogin.idStudent}</h2>

            <Link to="/setting">
              <Button edit>
                <FontAwesomeIcon icon={faPen} />
                Editar perfil
              </Button>
            </Link>
          </div>

          <h2>{userLogin.displayName}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 px-6">
        <hr className=" my-8 w-full border-gray-400 border-1 justify-center items-center" />
      </div>

      <div className="flex flex-col justify-center items-center font-lilita text-2xl space-y-7 mb-16">
        <h2>Logros</h2>
        <div className="flex gap-4">
          {modules.map((module) => {
            const isCompleted = completedModules.some(
              (completedModule) => completedModule.idModule === module.idModule
            );
            const textColor = isCompleted
              ? "text-green-500 border-green-500"
              : "text-gray-300 border-gray-200";
            return (
              <div
                key={module.idModule}
                className={`border-2 w-44 h-30 rounded-md ${textColor} text-center`}
              >
                {module.nameModule}
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Profile;
