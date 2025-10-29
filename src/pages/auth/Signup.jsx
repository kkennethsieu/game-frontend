import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Creating account with:", form);
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen">
      <div className="space-y-6 bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        {/* Header */}
        <div className="space-y-1 text-center">
          <h1 className="font-bold text-gray-900 text-3xl">Create Account</h1>
          <p className="text-gray-500">
            Join our community and start sharing your reviews 🎮
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
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

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 focus:border-orange-400 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="you@example.com"
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

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 text-sm">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 focus:border-orange-400 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="••••••••"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 w-full"
          >
            Sign Up
          </Button>
        </form>

        {/* Divider */}
        <div className="flex justify-center items-center gap-2 text-gray-400 text-sm">
          <span className="border-gray-300 border-t w-20" />
          or
          <span className="border-gray-300 border-t w-20" />
        </div>

        {/* Social Signups */}
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

        {/* Login Redirect */}
        <p className="text-gray-600 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:text-orange-600">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
