import { Outlet } from "react-router-dom";

//Components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-50 shadow-sm border-gray-200 border-b">
        <Navbar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="flex bg-gray-100 shadow-sm border-gray-200 border-t">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
