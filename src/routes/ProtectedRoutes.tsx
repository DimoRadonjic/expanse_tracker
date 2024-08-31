import { Navigate, Route, Routes } from "react-router-dom";
import { Main, Navbar, TransactionForm } from "../components";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="add-transaction" element={<TransactionForm />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
