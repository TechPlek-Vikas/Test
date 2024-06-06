import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

const Layout = ({ data }) => {
  console.log("Layout = ", data);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Layout useEffect running = ", data);
    if (data) {
      console.log("Data found");
      navigate("/");
    }
  }, [data, navigate]);

  console.log("Vikas");

  if (!data) {
    console.log("User not logged in");
    return <Outlet />;
  }
};

export default Layout;
