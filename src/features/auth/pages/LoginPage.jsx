//Packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Icons
import { Icon } from "@iconify/react";
//Components
import Button from "components/Button";
//Provider
import { useAuth } from "../../../provider/AuthProvider";

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.username, form.password);
      console.log("Logging in");
      nav("/account");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen">
      <div className="space-y-6 bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        {/* Header */}
        <div className="space-y-1 text-center">
          <h1 className="font-bold text-gray-900 text-3xl">Welcome Back</h1>
          <p className="text-gray-500">Log in to continue your adventure 🎮</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 text-sm">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 focus:border-orange-400 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="Kenny"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 text-sm">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="px-4 py-2 pr-10 border border-gray-300 focus:border-orange-400 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 w-full"
                placeholder="••••••••"
              />
              <Icon
                icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                className="top-2.5 right-3 absolute text-gray-500 cursor-pointer"
                width={22}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="font-medium text-orange-500 hover:text-orange-600 text-sm"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 w-full"
          >
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="flex justify-center items-center gap-2 text-gray-400 text-sm">
          <span className="border-gray-300 border-t w-20" />
          or
          <span className="border-gray-300 border-t w-20" />
        </div>

        {/* Social Logins */}
        <div className="flex gap-3">
          <button className="flex justify-center items-center gap-2 hover:bg-gray-100 py-2 border border-gray-300 rounded-lg w-1/2 transition">
            <Icon icon="flat-color-icons:google" width={20} />
            Google
          </button>
          <button className="flex justify-center items-center gap-2 hover:bg-gray-100 py-2 border border-gray-300 rounded-lg w-1/2 transition">
            <Icon icon="ri:github-fill" width={20} />
            GitHub
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-gray-600 text-sm text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:text-orange-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
