import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import AdminComponent from "./components/AdminComponent";
import DriverComponent from "./components/DriverComponent";

// pages
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

import AdminRoute from "./routes/AdminRoute";
import DriverRoute from "./routes/DriverRoute";

// const routeConfig = {
//   admin: [<AdminRoute key="admin-route" />],
//   driver: [<DriverRoute key="driver-route" />],
// };


const Start = () => {
  const [userRole, setUserRole] = useState(null);
  // const [userRole, setUserRole] = useState("admin");

  //   const navigate = useNavigate();

  useEffect(() => {
    // Simulate user authentication and role retrieval
    const mockUserLogin = async () => {
      const fetchedUserRole = "admin"; // Example: 'admin' or 'driver'
      //   const fetchedUserRole = "driver"; // Example: 'admin' or 'driver'
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUserRole(fetchedUserRole);
    };

    mockUserLogin();
  }, []);

    // return (
    //   <Routes>
    //     {userRole === "admin" && (
    //       <>
    //         <Route path="/page1" element={<Page1 />} />
    //         <Route path="/page2" element={<Page2 />} />
    //         <Route path="/page3" element={<Page3 />} />
    //         <Route path="/page4" element={<Page4 />} />
    //         <Route path="/page5" element={<Page5 />} />

    //         <Route path="*" element={<PageNotFound />} />
    //       </>
    //     )}
    //     {userRole === "driver" && (
    //       <>
    //         <Route path="/page1" element={<Page1 />} />
    //         <Route path="/page5" element={<Page5 />} />

    //         <Route path="*" element={<PageNotFound />} />
    //       </>
    //     )}

    //     {/* Public */}
    //     <Route path="/">
    //       <Route path="" index element={<Home />} />
    //       <Route path="landing" element={<Landing />} />
    //       <Route path="login" element={<Login />} />
    //     </Route>
    //   </Routes>
    // );

    return (
        <Routes>
            <Route path="/">
                <Route path="" index element={<Home />} />
                <Route path="landing" element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="user">
                    <Route path="" element={<UserList />} />
                    <Route path=":id" element={<User />} />
                </Route>
            </Route>
        </Routes>
    )

};

export default Start;
