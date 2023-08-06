import { Outlet} from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";


const ProtectedRoute = () => {
  return (
    <div>
      <NavBar/>
      <SideBar>
        <Outlet/>
      </SideBar>
    </div>
  )
}

export default ProtectedRoute
