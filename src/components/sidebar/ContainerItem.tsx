import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  icon: string;
  path: string;
}

export default function ContainerItem({ title, icon, path }: Props) {
  const navigate = useNavigate();
  
  function handleClick(path: string) {
    navigate(path);
  }

  return (
    <button
      className="flex justify-start items-center cursor-pointer w-full hover:bg-slate-200 gap-5 p-4 rounded-xl"
      onClick={() => handleClick(path)}
    >
      <img src={icon} alt="logo de aprender" />
      <h2 className="font-lilita text-gray-600">{title}</h2>
    </button>
  );
}
