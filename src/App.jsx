import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AccountLayout from "./layouts/AccountLayout";

import Home from "./pages/Home";
import Game from "./pages/Game";
import MyReviews from "./pages/account/MyReviews";
import Settings from "./pages/account/Settings";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#f97316",
            border: "1px solid #f97316",
            borderRadius: "8px",
            padding: "12px 20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            fontWeight: "500",
            fontSize: "14px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<MyReviews />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
