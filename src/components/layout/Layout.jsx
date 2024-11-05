import { Routers } from "../../routers/Routers";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routers />
        </div>
      </div>
    </>
  );
};

export default Layout;
