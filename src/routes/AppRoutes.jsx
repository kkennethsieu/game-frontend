import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import MainLayout from "layouts/MainLayout";
import AccountLayout from "layouts/AccountLayout";

// HomePage
import HomePage from "features/home/pages/HomePage";

// Lazy-loaded pages (code-splitting)
const GamePage = lazy(() => import("features/games/pages/GamePage"));

const UserReviewsPage = lazy(() =>
  import("features/user/pages/UserReviewsPage")
);

const SettingsPage = lazy(() => import("features/user/pages/SettingsPage"));

const LoginPage = lazy(() => import("features/auth/pages/LoginPage"));

const SignupPage = lazy(() => import("features/auth/pages/SignupPage"));

const VerifyMFAPage = lazy(() => import("features/auth/pages/VerifyMFAPage"));

// Other components
import ProtectedRoute from "features/auth/components/ProtectedRoute";
import GameNotFound from "components/GameNotFound";
import Spinner from "components/Spinner";

// Simple fallback loader (customize later)
const Loader = () => <Spinner />;

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Game */}
          <Route path="/game/:id" element={<GamePage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-mfa/:code" element={<VerifyMFAPage />} />

          {/* Account */}
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

          {/* 404 */}
          <Route path="*" element={<GameNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
