import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Navbar } from "../components";
import { useAuthContext } from "../contexts/authContext";

export const AppRouter = () => {
  const { status } = useAuthContext();

  if (status === "checking")
    return <div className="loading">Checking credentials...</div>;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {status === "authenticated" ? (
            <Route path="/*" element={<ProtectedRoutes />} />
          ) : (
            <Route path="/*" element={<PublicRoutes />} />
          )}

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
