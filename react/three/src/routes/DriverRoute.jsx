import { Route } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page5 from "../pages/Page5";

const DriverRoute = () => {
  return (
    <>
      <Route path="/">
        <Route path="page1" element={<Page1 />} />
        <Route path="page5" element={<Page5 />} />
      </Route>
    </>
  );
};

export default DriverRoute;
