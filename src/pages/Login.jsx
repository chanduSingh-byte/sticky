import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Mock users
  const users = [
    {
      email: "admin@example.com",
      password: "admin123",
      role: "Admin",
      name: "System Admin",
    },
    {
      email: "user@example.com",
      password: "user123",
      role: "User",
      name: "John User",
    },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.email === form.email && u.password === form.password,
    );

    if (!foundUser) {
      setError("Invalid email or password");
      return;
    }

    setUser(foundUser);
    setError("");
  };

  const logout = () => {
    setUser(null);
    setForm({
      email: "",
      password: "",
    });
  };

  // Dashboard
  if (user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          <div className="mb-4">
            <p className="text-lg">
              Welcome,
              <span className="font-semibold ml-2">{user.name}</span>
            </p>

            <p className="text-gray-600">
              Role:{" "}
              <span className="font-medium text-indigo-600">{user.role}</span>
            </p>
          </div>

          {/* Role Based Access */}
          {user.role === "Admin" ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-700 mb-2">Admin Access</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Manage Users</li>
                <li>View Reports</li>
                <li>System Configuration</li>
                <li>Full Dashboard Access</li>
              </ul>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-700 mb-2">User Access</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>View Profile</li>
                <li>Update Settings</li>
                <li>Access Personal Dashboard</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Login Form
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <p className="font-semibold mb-2">Demo Credentials:</p>
          <p>Admin: admin@example.com / admin123</p>
          <p>User: user@example.com / user123</p>
        </div>
      </div>
    </div>
  );
}
