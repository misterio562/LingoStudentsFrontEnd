import ContainerItem from "./ContainerItem";

const ITEMS = [
  { title: "Aprender", icon: "/learn/sidebar/learn.png", path: "/learn" },
  { title: "Perfil", icon:"/learn/sidebar/profile.png", path: "/profile" }
];

export default function () {
  return (
    <aside className="fixed top-20 left-0 bottom-0 float-left w-1/6 h-full text-2xl p-5 border-r-4 border-gray-200">
      {ITEMS.map((item, index) => (
        <ContainerItem key={index} {...item}/>
      ))}
    </aside>
  );
}
