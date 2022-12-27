import { Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";

export const protectedRoutes = (
  <>
    <Route path="/auth">
      <Route path="login" element={<Login />} />
    </Route>
  </>
);
