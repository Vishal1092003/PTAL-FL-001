
// import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "./auth";

// export default function PrivateRoute({ children }) {
//   return isAuthenticated() ? children : <Navigate to="/signin" replace />;
// }



// src/user/PrivateRoute.jsx

import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

export default function PrivateRoute({ children }) {

  return isAuthenticated()
    ? children
    : <Navigate to="/signin" replace />;
}
