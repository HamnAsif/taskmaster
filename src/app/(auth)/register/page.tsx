"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("User created successfully! Please sign in.");
      router.push("/dashboard");
    } else {
      setError(data.error || "Something went wrong");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-between items-center shadow-md p-10 rounded-md border-2 border-gray-200">
        <h1 className="font-bold text-2xl text-gray-800">
          Create Your Account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center space-y-6 p-10"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input p-2 border-2 border-gray-200 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input p-2 border-2 border-gray-200 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input p-2 border-2 border-gray-200 rounded"
          />
          <button type="submit" className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 transition text-white">
            Register
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
