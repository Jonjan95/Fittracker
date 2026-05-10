"use client";

import { useState } from "react";

export default function AddNote({ userId }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noteData = {
      content: content,
      user: { id: parseInt(userId) }
    };

    try {
      const res = await fetch("http://localhost:8080/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noteData),
      });

      if (res.ok) {
        setContent("");
        window.location.reload();
      } else {
        const errorMsg = await res.text();
        console.error("Backend returned an error:", errorMsg);
        alert("Could not save: " + errorMsg);
      }
    } catch (error) {
      console.error("Network or connection error:", error);
      alert("Could not connect to the server.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="w-full p-2 border"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a training note..."
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 mt-2">
        Save
      </button>
    </form>
  );
}