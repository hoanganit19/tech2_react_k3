import { Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import { GuestMiddleware } from "../Middlewares/GuestMiddleware";

export const protectedRoutes = (
  <>
    <Route path="/dang-nhap" element={<GuestMiddleware />}>
      <Route path="" element={<Login />} />
    </Route>
  </>
);
