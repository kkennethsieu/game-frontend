import { Navigate } from "react-router-dom";
import { useAuth } from "../../../provider/AuthProvider";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Still checking refresh token → don't redirect yet
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  // After checking, still no user → redirect
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Authorized
  return children;
}
