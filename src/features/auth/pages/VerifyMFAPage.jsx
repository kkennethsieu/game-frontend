//Packages
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Provider
import { useAuth } from "../../../provider/AuthProvider";

const VerifyMFAPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  const { verifyMFA, loading } = useAuth();
  const mfaCode = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const success = await verifyMFA(code, mfaCode.code); // call backend
      if (success) {
        console.log("Success");
        nav("/account"); // redirect on success
      } else {
        setError("Invalid code. Please try again.");
        nav("/signup");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 px-4 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-sm">
        <h2 className="mb-6 font-semibold text-gray-800 text-2xl text-center">
          Enter MFA Code
        </h2>
        <p className="mb-6 text-gray-500 text-center">
          Enter the 6-digit code sent to your device {mfaCode.code}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="123456"
            className="px-4 py-2 border border-gray-300 focus:border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg text-center tracking-widest"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 py-2 rounded-lg font-semibold text-white transition-colors"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <div className="mt-4 text-gray-500 text-sm text-center">
          <button
            type="button"
            disabled={loading}
            className="hover:text-gray-700 underline"
            onClick={() => nav("/login")}
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyMFAPage;
