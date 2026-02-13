import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-500 text-white">
      <h1>This is MainLayout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
