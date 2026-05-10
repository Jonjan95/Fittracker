"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ userName: "", password: "" });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const user = await res.json();
      localStorage.setItem("userId", user.id);
      router.push("/dashboard");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Log in</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm">
        <input
          className="border p-2"
          type="text"
          placeholder="Username"
          onChange={e => setForm({...form, userName: e.target.value})}
          required
        />
        <input
          className="border p-2"
          type="password"
          placeholder="Password"
          onChange={e => setForm({...form, password: e.target.value})}
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Log in
        </button>
      </form>
    </div>
  );
}