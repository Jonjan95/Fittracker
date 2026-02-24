"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ userName: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Konto skapat");
      router.push("/login");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Registrera konto</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
        <input
          className="border p-2"
          type="text"
          placeholder="Användarnamn"
          onChange={e => setForm({...form, userName: e.target.value})}
          required
        />
        <input
          className="border p-2"
          type="email"
          placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})}
          required
        />
        <input
          className="border p-2"
          type="password"
          placeholder="Lösenord"
          onChange={e => setForm({...form, password: e.target.value})}
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Registrera
        </button>
      </form>
    </div>
  );
}