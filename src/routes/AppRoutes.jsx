// Package Imports
import { Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "layouts/MainLayout";
import AccountLayout from "layouts/AccountLayout";
//Main Pages
import HomePage from "features/home/pages/HomePage";
import GamePage from "features/games/pages/GamePage";
//Settings Pages
import UserReviewsPage from "features/user/pages/UserReviewsPage";
import SettingsPage from "features/user/pages/SettingsPage";
//Auth Pages
import LoginPage from "features/auth/pages/LoginPage";
import SignupPage from "features/auth/pages/SignupPage";
import VerifyMFAPage from "features/auth/pages/VerifyMFAPage";
// Route Protection
import ProtectedRoute from "features/auth/components/ProtectedRoute";
import GameNotFound from "components/GameNotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Route */}
        <Route index element={<HomePage />} />
        {/* Game Route */}
        <Route path="/game/:id" element={<GamePage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-mfa/:code" element={<VerifyMFAPage />} />

        {/* Account Protected Routes */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserReviewsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<GameNotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
